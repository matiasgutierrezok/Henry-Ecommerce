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

        <div className="navbar">
            <form className="form-inline my-2 my-lg-0" onSubmit={onSubmit} width="225px">
                <input className="form-control mr-sm-2" type="search" placeholder="Palabra clave.." aria-label="Search" value={keyword} onChange={e => setKeyword(e.target.value)} />
                <button className="btn btn-outline-success my-2 my-sm-0" type='submit'>Vamos!</button>
            </form>
        </div>
    );
};
