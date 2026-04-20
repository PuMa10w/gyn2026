import { describe, it, expect, beforeEach, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

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

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders main navigation and search', async () => {
    render(<App />);

    expect(screen.getByText('Gyn & Obs')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/поиск нозологии/i)).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /гинекология/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /акушерство/i })).toBeInTheDocument();
    await screen.findByText('Эндометриоз');
  });

  it('filters cards by search query', async () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(/поиск нозологии/i);
    fireEvent.change(searchInput, { target: { value: 'Эндометриоз' } });

    await waitFor(() => {
      expect(screen.getByText('Эндометриоз')).toBeInTheDocument();
    });
  });

  it('adds item to favorites and shows it in favorites tab', async () => {
    render(<App />);

    await screen.findByText('Эндометриоз');
    
    const card = screen.getByText('Эндометриоз').closest('article');
    const favoriteBtn = card?.querySelector('button.favorite-btn');
    fireEvent.click(favoriteBtn!);

    fireEvent.click(screen.getByText(/избранное/i));

    await waitFor(() => {
      expect(screen.getByText('Эндометриоз')).toBeInTheDocument();
    });
  });

  it('opens modal and stores viewed item in history', async () => {
    render(<App />);

    const card = await screen.findByText('Эндометриоз');
    fireEvent.click(card);

    await waitFor(() => {
      expect(screen.getByTestId('disease-modal')).toBeInTheDocument();
    });
  });

  it('filters diseases by category', async () => {
    render(<App />);

    await screen.findByText('Эндометриоз');
    
    const categoryChips = screen.getAllByRole('button', { name: /воспалительные/i });
    const categoryChip = categoryChips.find(btn => btn.classList.contains('category-chip'));
    fireEvent.click(categoryChip!);

    await waitFor(() => {
      expect(screen.getByText('Эндометриоз')).toBeInTheDocument();
    });

    const oncologyChips = screen.getAllByRole('button', { name: /онкология/i });
    const oncologyChip = oncologyChips.find(btn => btn.classList.contains('category-chip'));
    fireEvent.click(oncologyChip!);

    await waitFor(() => {
      expect(screen.queryByText('Эндометриоз')).not.toBeInTheDocument();
    });
  });
});