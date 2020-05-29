import React, {useState} from 'react';
import './SearchBar.css'

export default function SearchBar({ handleKeyword }) {

    var [keyword, setKeyword] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        handleKeyword(keyword);
        setKeyword('');
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <form id='search-bar' class="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
                <input class="form-control mr-sm-2" type="search" placeholder="Escribí una palabra clave..." aria-label="Search" value={keyword} onChange={e => setKeyword(e.target.value)} />
                <button class="btn btn-outline-success my-2 my-sm-0" type='submit'>Buscar</button>
            </form>
        </nav>
    );
};