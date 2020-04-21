import React, { Component } from 'react';
import { connect } from 'react-redux';

import TagSelection from '../Tag/TagSelection';

class EntryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipientTags: [],
            recipientTime: null,
            message: null,
        };
        this.onSelectTags = this.onSelectTags.bind(this);
    }

    onSelectTags(selectedTags) {
        this.setState({
            recipientTags: selectedTags,
        });
    }
    
    render() {
        const { recipientTags } = this.state;
        const { onSelectTags } = this;
        return (
            <div>
                <TagSelection selectedTags={recipientTags} submitHandler={onSelectTags} />
                <textarea id="message" name="message" />
            </div>
        );
    }
}

const mapStateToProps = ({ currentTags }) => ({
    currentTags,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm);