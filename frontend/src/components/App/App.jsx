import React, { Component } from 'react';

import { connect } from 'react-redux';
import fetchTags from '../../store/actions/fetchTags.action'
import fetchEntries from '../../store/actions/fetchEntries.action';

import TagList from '../Tag/TagList';
import EntryList from '../Entry/EntryList';
import Entry from '../Entry/Entry';
import EntryForm from '../Entry/EntryForm';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entryState: 'view',
        }
        this.toggleCompose = this.toggleCompose.bind(this);
    }

    componentDidMount() {
        const { fetchTags } = this.props;
        const { fetchEntries } = this.props;
        fetchTags();
        fetchEntries();
    }

    toggleCompose() {
        this.setState({
            entryState: this.state.entryState === 'view' ? 'compose' : 'view'
        });
    }
    
    render() {
        const { entryState } = this.state;
        const entry = entryState === 'view' ? <Entry /> : <EntryForm />;
        return (
            <div className="container">
                <div onClick={this.toggleCompose}>
                    Compose
                </div>
                <div className="row">
                    <div className="col-3">
                        <EntryList />
                    </div>
                    <div className="col-6">
                        {entry}
                    </div>
                    <div className="col-3">
                        <TagList />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchTags,
    fetchEntries,
}

export default connect(null, mapDispatchToProps)(App);
