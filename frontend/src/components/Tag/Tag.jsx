import React from 'react';
import './Tag.css';

const Tag = ({name, color}) => (
    <div 
        className="Tag"
        style={{
            borderColor: color
        }}
    >
        {name}
    </div>
)

export default Tag;
