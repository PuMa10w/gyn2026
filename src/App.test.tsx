import { describe, it, expect, beforeEach, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

const { gynFixture, obsFixture } = vi.hoisted(() => ({
  gynFixture: [
    {
      id: 'endometriosis',
      name: 'Эндометриоз',
      icd: 'N80',
      subtitle: 'Гинекология',
      description: 'Доброкачественное разрастание ткани, сходной с эндометрием.',
      icon: 'endometriosis',
      definition: 'Определение',
      epidemiology: 'Эпидемиология',
      etiology: ['Причина'],
      symptoms: ['Боль'],
      diagnostics: {
        steps: ['Осмотр'],
        markers: 'Маркер',
      },
      treatment: {
        conservative: ['Терапия'],
        surgical: ['Операция'],
        guidelines: {
          eau: 'EAU',
          acog: 'ACOG',
          ranzcog: 'RANZCOG',
          ru: 'RU',
        },
      },
    },
  ],
  obsFixture: [
    {
      id: 'preeclampsia',
      name: 'Преэклампсия',
      icd: 'O14',
      subtitle: 'Акушерство',
      description: 'Осложнение беременности.',
      icon: 'preeclampsia',
      definition: 'Определение',
      epidemiology: 'Эпидемиология',
      etiology: ['Причина'],
      symptoms: ['Отеки'],
      diagnostics: {
        steps: ['Осмотр'],
        markers: 'Маркер',
      },
      treatment: {
        conservative: ['Терапия'],
        surgical: ['Операция'],
        guidelines: {
          eau: 'EAU',
          acog: 'ACOG',
          ranzcog: 'RANZCOG',
          ru: 'RU',
        },
      },
    },
  ],
}));

vi.mock('./data/loadGynData', () => ({
  loadGynData: vi.fn().mockResolvedValue(gynFixture),
}));

vi.mock('./data/loadObsData', () => ({
  loadObsData: vi.fn().mockResolvedValue(obsFixture),
}));

vi.mock('./components/DiseaseModal', () => ({
  __esModule: true,
  default: ({ item, onClose }: { item: { name: string }; onClose: () => void }) => (
    <div data-testid="disease-modal">
      <span>{item.name}</span>
      <button onClick={onClose}>close</button>
    </div>
  ),
}));

vi.mock('./components/Questionnaire', () => ({
  __esModule: true,
  default: ({ onClose }: { onClose: () => void }) => (
    <div data-testid="questionnaire-modal">
      <button onClick={onClose}>close</button>
    </div>
  ),
}));

vi.mock('./components/PharmacologyModal', () => ({
  __esModule: true,
  default: ({ onClose }: { onClose: () => void }) => (
    <div data-testid="pharmacology-modal">
      <button onClick={onClose}>close</button>
    </div>
  ),
}));

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders home screen with entry cards and footer', () => {
    render(<App />);

    expect(screen.getByRole('button', { name: /главная/i })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /гинекология/i }).length).toBeGreaterThan(1);
    expect(screen.getAllByRole('button', { name: /акушерство/i }).length).toBeGreaterThan(1);
    expect(screen.getByText(/© PuMa10w with ❤️/i)).toBeInTheDocument();
  });

  it('navigates from home to gynecology catalog and loads data', async () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('button', { name: /гинекология/i })[1]);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /гинекология/i })).toBeInTheDocument();
      expect(screen.getByText('Эндометриоз')).toBeInTheDocument();
    });
  });

  it('opens questionnaire and pharmacology from home cards', async () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('button', { name: /опросники/i })[1]);
    expect(await screen.findByTestId('questionnaire-modal')).toBeInTheDocument();
    fireEvent.click(screen.getAllByText('close')[0]);

    fireEvent.click(screen.getAllByRole('button', { name: /фармакология/i })[1]);
    expect(await screen.findByTestId('pharmacology-modal')).toBeInTheDocument();
  });

  it('supports search inside catalog', async () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('button', { name: /гинекология/i })[0]);

    await screen.findByText('Эндометриоз');

    const searchInput = screen.getByPlaceholderText(/нозология, симптом, код мкб/i);
    fireEvent.change(searchInput, { target: { value: 'Эндометриоз' } });

    await waitFor(() => {
      expect(screen.getByText('Эндометриоз')).toBeInTheDocument();
    });
  });

  it('shows saved item in favorites mode', async () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('button', { name: /гинекология/i })[0]);
    await screen.findByText('Эндометриоз');

    fireEvent.click(screen.getByRole('button', { name: /добавить эндометриоз в избранное/i }));
    fireEvent.click(screen.getByRole('button', { name: /^избранное$/i }));

    await waitFor(() => {
      expect(screen.getByText('Эндометриоз')).toBeInTheDocument();
    });
  });

  it('stores opened item in history mode', async () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('button', { name: /гинекология/i })[0]);
    const card = await screen.findByRole('button', { name: /эндометриоз, код n80/i });
    fireEvent.click(card);

    expect(await screen.findByTestId('disease-modal')).toBeInTheDocument();
    fireEvent.click(screen.getAllByText('close')[0]);
    fireEvent.click(screen.getByRole('button', { name: /^история$/i }));

    await waitFor(() => {
      expect(screen.getAllByRole('button', { name: /эндометриоз, код n80/i })).toHaveLength(1);
    });
  });
});
