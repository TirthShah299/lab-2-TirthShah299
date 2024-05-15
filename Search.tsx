import { useState } from 'react';

type SearchProps = {
    onFilter: (name: string) => void;
};

const Search = ({ onFilter }: SearchProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        onFilter(e.target.value);
    };

    return (
        <div className='filter-search'>
            Filter
            <input type='text' value={searchTerm} onChange={handleChange} />
        </div>
    );
};

export default Search;