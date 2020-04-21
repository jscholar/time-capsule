import React from 'react';

import { connect } from 'react-redux';
import toggleTag from '../../store/actions/toggleTag.action';

import Tag from './Tag';
import TagForm from './TagForm';

import './TagList.css';

const TagList = ({ tags, toggleTag }) => (
    <div className="TagList">
        {
            Object.entries(tags).map(([id, {name, color}]) => (
                <Tag
                    id={id}
                    key={id}
                    name={name}
                    color={color}
                    clickHandler={toggleTag}
                />
            ))
        }
        <TagForm></TagForm>
    </div>
);

const mapStateToProps = ({ tags }) => ({
    tags,
});

const mapDispatchToProps = {
    toggleTag,
}

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
