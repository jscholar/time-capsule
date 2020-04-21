import React from 'react';

import './Tag.css';

export const Tag = ({ id, name, color, clickHandler = () => {} }) => (
    <div 
        className="Tag"
        onClick={() => clickHandler(id)}
        style={{
            borderColor: color
        }}
    >
        {name}
    </div>
);

export default Tag;
