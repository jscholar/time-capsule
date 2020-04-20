import React from 'react';
import './Tag.css';

export interface TagProps {
    name: String,
    color: String,
}

const Tag = ({name, color}: TagProps) => (
    <div 
        className="tag"
        style={{
            border: `3px solid ${color}`
        }}
    >
        {name}
    </div>
)

export default Tag;
