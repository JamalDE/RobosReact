import React from 'react';
import '../search-box/searchbox.styles.css';

export const SearchBox = ({placeholder,handleChange})=>(
    <div className = ''>
        <input
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
        />
    </div>
);