import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Tag } from './Tag';

import './TagSelection.css'

class TagSelection extends Component {
    constructor(props) {
        super(props);
        const selectedTags = {};
        props.selectedTags.forEach((st) => selectedTags[st] = true)
        this.state = {
            selectedTags,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target }) {
        const { name, checked } = target;
        let newSelectedState = {
            ...this.state.selectedTags,
        }
        if (checked) {
            newSelectedState[name] = true;
        } else {
            delete newSelectedState[name];
        }
        this.setState({
            selectedTags: newSelectedState,
        })
    }

    render() {
        const { tags, submitHandler, selectedTags } = this.props;
        return (
            <div className="TagSelection">
                <div className="input-group input-group-sm">
                {
                    Object.entries(tags).map(([id, {name, color}]) => (
                        <div key={id}>
                            <input type="checkbox" name={id} onChange={this.handleChange} defaultChecked={selectedTags.includes(id)} />
                            <Tag
                                id={id}
                                name={name}
                                color={color}
                            />
                        </div>
                    ))
                }
                </div>
                <div onClick={() => submitHandler(Object.keys(this.state.selectedTags))}>
                    Submit
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ tags }) => ({
    tags,
})

export default connect(mapStateToProps)(TagSelection);