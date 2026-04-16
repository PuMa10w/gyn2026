import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

jest.mock('./components/BackgroundEffects', () => () => <div data-testid="bg-effects" />);
jest.mock('./components/DiseaseModal', () => ({
  __esModule: true,
  default: ({ item, onClose }) => (
    <div data-testid="disease-modal">
      <span>{item.name}</span>
      <button onClick={onClose}>close</button>
    </div>
  ),
}));
jest.mock('./components/Questionnaire', () => ({
  __esModule: true,
  default: ({ onClose }) => (
    <div data-testid="questionnaire-modal">
      <button onClick={onClose}>close questionnaire</button>
    </div>
  ),
}));

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders main navigation and search', () => {
    render(<App />);

    expect(screen.getByText('Gyn & Obs')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/поиск нозологии/i)).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /гинекология/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /акушерство/i })).toBeInTheDocument();
  });

  test('filters cards by search query', async () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(/поиск нозологии/i);
    fireEvent.change(searchInput, { target: { value: 'эндометриоз' } });

    await waitFor(() => {
      expect(screen.getByText('Эндометриоз')).toBeInTheDocument();
    });
  });

  test('adds item to favorites and shows it in favorites tab', async () => {
    render(<App />);

    const favoriteButton = await screen.findByLabelText(/добавить эндометриоз в избранное/i);
    fireEvent.click(favoriteButton);

    fireEvent.click(screen.getByText(/Избранное/i));

    await waitFor(() => {
      expect(screen.getByText('Эндометриоз')).toBeInTheDocument();
    });
  });

  test('opens modal and stores viewed item in history', async () => {
    render(<App />);

    fireEvent.click(screen.getByText('Эндометриоз'));

    await waitFor(() => {
      expect(screen.getByTestId('disease-modal')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/История/i));

    await waitFor(() => {
      expect(screen.getByTestId('disease-modal')).toBeInTheDocument();
      expect(screen.getAllByText('Эндометриоз').length).toBeGreaterThan(1);
    });
  });
});
