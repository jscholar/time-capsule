import React, { Component } from 'react';

import { connect } from 'react-redux';

import { postEntry } from '../../api/entries';

import TagSelection from '../Tag/TagSelection';
import Tag from '../Tag/Tag';
class EntryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entry: {
                recipientTags: [],
                recipientTime: null,
                message: null,
            },
            selectingTags: false,
        };
        this.onSelectTags = this.onSelectTags.bind(this);
        this.toggleSelecting = this.toggleSelecting.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSelectTags(selectedTags) {
        const updatedEntry = { ...this.state.entry };
        updatedEntry.recipientTags = selectedTags;
        this.setState({
            entry: updatedEntry,
            selectingTags: false,
        });
    }

    toggleSelecting() {
        this.setState({
            selectingTags: !this.state.selectingTags,
        });
    }

    handleSubmit() {
        postEntry({
            ... this.state.entry,
            recipientTime: new Date(),
            senderTime: null,
            senderTags: this.props.currentTags,
        })
    }

    handleChange({ target }) {
        const newEntry = { ...this.state.entry }
        newEntry[target.name] = target.value
        this.setState({
            entry: newEntry,
        });
    }
    
    render() {
        const { recipientTags } = this.state.entry;
        const { tags, currentTags } = this.props;
        const { onSelectTags, toggleSelecting } = this;
        return (
            <div>
                <div className="recipient">
                    <div onClick={toggleSelecting}>
                        Select Tags
                        {
                            recipientTags.map((tagId) => (
                                <Tag
                                    key={tagId}
                                    id={tagId}
                                    name={tags[tagId].name}
                                    color={tags[tagId].color}
                                />
                            ))
                        }
                    </div>
                        {
                            this.state.selectingTags
                                ? <TagSelection selectedTags={recipientTags} submitHandler={onSelectTags} />
                                : null
                        }
                    <input type="date" />
                </div>

                <div className="message">
                    <textarea id="message" name="message" onChange={this.handleChange} />
                </div>

                <div className="sender">
                    {currentTags.map(tagId => (
                        <Tag 
                            key={tagId}
                            name={tags[tagId].name}
                            color={tags[tagId].color}
                        />
                    ))}
                </div>
                <input type="checkbox" name="ephemeral" />
                <label htmlFor="Ephemeral">Ephemeral</label>
                <div onClick={this.handleSubmit}>
                    Submit Entry
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ currentTags, tags }) => ({
    currentTags,
    tags,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm);
