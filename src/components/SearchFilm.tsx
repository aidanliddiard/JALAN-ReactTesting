import React, { useState } from 'react';

interface SearchFilmProps {
    setSearch: (text: string) => void;
}

const SearchFilm: React.FC<SearchFilmProps> = ({ setSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setSearch(inputValue);
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