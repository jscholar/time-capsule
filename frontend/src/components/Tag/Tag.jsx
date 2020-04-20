import React from 'react';

import { connect } from 'react-redux';
import selectTag from '../../store/actions/selectTag.action';

import './Tag.css';

const Tag = ({ id, name, color, selectTag }) => (
    <div 
        className="Tag"
        onClick={() => selectTag(id)}
        style={{
            borderColor: color
        }}
    >
        {name}
    </div>
);

const mapDispatchToProps = {
    selectTag
}

export default connect(null, mapDispatchToProps)(Tag);
