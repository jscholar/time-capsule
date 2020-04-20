import React from 'react';
import Tag from './Tag';
import TagForm from './TagForm';

import './TagList.css';

const TagList = ({ tags }) => (
    <div className="TagList">
        {
            tags.map(({name, color}) => (
                <Tag
                    key={name + color}
                    name={name}
                    color={color}
                />
            ))
        }
        <TagForm></TagForm>
    </div>
);

export default TagList;
