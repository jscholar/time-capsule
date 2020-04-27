import React, { Component } from 'react';

import { connect } from 'react-redux';
import { postTag } from '../../api/tags';
import fetchTags from '../../store/actions/fetchTags.action';

import './TagForm.css';

class TagForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            color: null,
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler({ target }) {
        const { name, value } = target
        this.setState({
            [name]: value
        });
    }

    submitHandler() {
        if (!this.state.name || !this.state.name.length) {
            return;
        }
        
        const tag = {
            ...this.state
        }
        const { fetchTags } = this.props;
        
        postTag(tag)
            .then(fetchTags);
    }

    render() {
        return (
            <div className="TagForm">
                <div>New Tag</div>
                <input onChange={this.changeHandler} id="name" type="text" name="name"></input>
                <input onChange={this.changeHandler} id="color" type="color" name="color"></input>
                <div onClick={this.submitHandler}>Add</div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchTags,
}

export default connect(null, mapDispatchToProps)(TagForm);
