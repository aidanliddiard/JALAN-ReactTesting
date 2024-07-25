import React, { useState } from 'react';

interface SearchFilmProps {
    searchFilm: (text: string) => void;
}

const SearchFilm: React.FC<SearchFilmProps> = ({ searchFilm }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            searchFilm(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Search Films</button>
        </form>
    );
};

export default SearchFilm;