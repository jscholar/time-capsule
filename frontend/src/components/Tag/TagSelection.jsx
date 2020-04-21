import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Tag } from './Tag';

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
        const { tags, submitHandler } = this.props;
        return (
            <div>
                {
                    Object.entries(tags).map(([id, {name, color}]) => (
                        <div key={id}>
                            <input type="checkbox" name={id} onChange={this.handleChange} />
                            <Tag
                                id={id}
                                name={name}
                                color={color}
                            />
                        </div>
                    ))
                }
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