import React from 'react';
import Tag from './Tag';

const TagList = ({ tags }) => (
    tags.map(({name, color}) => (
        <Tag
            key={name + color}
            name={name}
            color={color}
        />
    ))
);

export default TagList;
