import React from 'react';
import { connect } from 'react-redux';

import Tag from './Tag';
import TagForm from './TagForm';

import './TagList.css';

const TagList = ({ tags }) => (
    <div className="TagList">
        {
            Object.entries(tags).map(([id, {name, color}]) => (
                <Tag
                    id={id}
                    key={id}
                    name={name}
                    color={color}
                />
            ))
        }
        <TagForm></TagForm>
    </div>
);

const mapStateToProps = ({ tags }) => ({
    tags,
});

export default connect(mapStateToProps)(TagList);
