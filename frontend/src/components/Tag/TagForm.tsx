import React, { Component } from 'react';

class TagForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            color: null,
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler({ target }) {
        const { name, value } = target
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <div>New Tag</div>
                <input onChange={this.changeHandler} id="name" type="text" name="name"></input>
                <input onChange={this.changeHandler} id="color" type="color" name="color"></input>
                <div>Add</div>
            </div>
        )
    }
}

export default TagForm;
