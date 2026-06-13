import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CommandSearch from '../CommandSearch';
import { siteSearch } from '../../utils/siteSearch';

// Mock siteSearch to avoid loading real data in tests
vi.mock('../../utils/siteSearch', () => ({
  siteSearch: {
    search: vi.fn(),
    isLoading: false,
    isLoaded: true,
  },
}));

describe('CommandSearch', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows quick access commands when idle (no query)', () => {
    const onCommand = vi.fn();
    render(<CommandSearch onCommand={onCommand} />);

    expect(screen.getByText('Быстрый доступ')).toBeInTheDocument();
    expect(screen.getByText('Фармакология')).toBeInTheDocument();
    expect(screen.getByText('Опросники')).toBeInTheDocument();
  });

  it('shows grouped results when search returns data', async () => {
    const mockResults = {
      diseases: [
        {
          type: 'disease',
          id: 'endometriosis__gyn',
          label: 'Эндометриоз',
          description: 'Хроническое эстроген-зависимое заболевание',
          badge: 'N80',
          route: 'gynecology',
          icd: 'N80',
          subtitle: 'Гинекология',
          query: 'Эндометриоз',
          score: 50,
        },
      ],
      medications: [
        {
          type: 'medication',
          id: 'dienogest',
          label: 'Диеногест',
          description: 'Гормональная терапия — Dienogest',
          badge: 'Препарат',
          route: 'pharmacology',
          query: 'Диеногест',
          score: 30,
        },
      ],
      questionnaires: [],
      total: 2,
    };

    vi.mocked(siteSearch.search).mockResolvedValue(mockResults);

    const onCommand = vi.fn();
    render(<CommandSearch onCommand={onCommand} />);

    fireEvent.change(screen.getByRole('searchbox', { name: /глобальный поиск gyn/i }), {
      target: { value: 'эндометриоз' },
    });

    await waitFor(() => {
      expect(screen.getByText('Нозологии (1)')).toBeInTheDocument();
      expect(screen.getByText('Препараты (1)')).toBeInTheDocument();
      expect(screen.getByText('Эндометриоз')).toBeInTheDocument();
      expect(screen.getByText('Диеногест')).toBeInTheDocument();
    });

    // Click a disease result
    fireEvent.click(screen.getByText('Эндометриоз'));

    expect(onCommand).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'endometriosis__gyn',
        directDiseaseId: 'endometriosis__gyn',
        route: 'gynecology',
      }),
    );
  });

  it('shows empty state when no results found', async () => {
    const emptyResults = {
      diseases: [],
      medications: [],
      questionnaires: [],
      total: 0,
    };

    vi.mocked(siteSearch.search).mockResolvedValue(emptyResults);

    const onCommand = vi.fn();
    render(<CommandSearch onCommand={onCommand} />);

    fireEvent.change(screen.getByRole('searchbox', { name: /глобальный поиск gyn/i }), {
      target: { value: 'редкий клинический запрос' },
    });

    await waitFor(() => {
      expect(screen.getByText('Продолжить клинический поиск?')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Искать в каталоге' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Фарма' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Шкалы' })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Искать в каталоге' }));

    expect(onCommand).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'free-search',
        query: 'редкий клинический запрос',
        route: 'gynecology',
      }),
    );
  });

  it('submits the top result on Enter', async () => {
    const mockResults = {
      diseases: [
        {
          type: 'disease',
          id: 'preeclampsia__obs',
          label: 'Преэклампсия',
          description: 'O14, гипертензия',
          badge: 'O14',
          route: 'obstetrics',
          icd: 'O14',
          subtitle: 'Акушерство',
          query: 'Преэклампсия',
          score: 60,
        },
      ],
      medications: [],
      questionnaires: [],
      total: 1,
    };

    vi.mocked(siteSearch.search).mockResolvedValue(mockResults);

    const onCommand = vi.fn();
    render(<CommandSearch onCommand={onCommand} />);

    const input = screen.getByRole('searchbox', { name: /глобальный поиск gyn/i });
    fireEvent.change(input, { target: { value: 'O14' } });

    await waitFor(() => {
      expect(screen.getByText('Преэклампсия')).toBeInTheDocument();
    });

    fireEvent.submit(input.closest('form')!);

    expect(onCommand).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'preeclampsia__obs',
        directDiseaseId: 'preeclampsia__obs',
        route: 'obstetrics',
      }),
    );
  });
});