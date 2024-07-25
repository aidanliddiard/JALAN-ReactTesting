import { render, screen, fireEvent } from '@testing-library/react';
import SearchFilm from '../SearchFilm';

test('renders input and search button', () => {
    render(<SearchFilm setSearch={() => {}} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search films/i })).toBeInTheDocument();
});

test('calls setSearch with value when form is submitted', () => {
    const mockSetSearch = jest.fn();

    render(<SearchFilm setSearch={mockSetSearch} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Totoro' } });
    fireEvent.submit(screen.getByRole('button', { name: /search films/i }));

    expect(mockSetSearch).toHaveBeenCalledWith('Totoro');
});

test('updates input value on change', () => {
    render(<SearchFilm setSearch={() => {}} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    
    fireEvent.change(input, { target: { value: 'Ponyo' } });
    
    expect(input.value).toBe('Ponyo');
});

test('clears input after form submission with valid input', () => {
    render(<SearchFilm setSearch={() => {}} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    
    fireEvent.change(input, { target: { value: 'Castle' } });
    fireEvent.click(screen.getByRole('button', { name: /search films/i }));
    
    expect(input.value).toBe('');
});

test('does not call setSearch if input is empty', () => {
    const mockSetSearch = jest.fn();

    render(<SearchFilm setSearch={mockSetSearch} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /search films/i }));

    expect(mockSetSearch).not.toHaveBeenCalled();
});
