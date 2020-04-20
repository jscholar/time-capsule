import React from 'react';
import './Tag.css';

export interface TagProps {
    name: string,
    color: string,
}

const Tag = ({name, color}: TagProps) => (
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
