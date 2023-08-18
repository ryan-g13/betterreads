import React, {useState} from "react";

const Search = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e:any) => {
        e.preventDefault();
        const lower = e.target.value.toLowerCase();
        setSearchInput(lower);
    }

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
            <button>Search</button>

        </div>
    )
}

export default Search;