import React from 'react';
import { IoMdSearch } from 'react-icons/io';

const SearchBar: React.FC = () => {
    return (
        <form>
            <div>
                <ul>
                    <li>Best Match</li>
                    <li>Highest Rated</li>
                    <li>Most Reviewed</li>
                </ul>
            </div>
            <input name="business" id="business" />
            <input name="location" id="location" />
            <button>
                <IoMdSearch /> Search
            </button>
        </form>
    );
};

export default SearchBar;
