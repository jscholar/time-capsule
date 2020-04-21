import React, { Component } from 'react';

import { connect } from 'react-redux';
import fetchTags from '../../store/actions/fetchTags.action'
import fetchEntries from '../../store/actions/fetchEntries.action';

import TagList from '../Tag/TagList';


import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchTags } = this.props;
        const { fetchEntries } = this.props;
        fetchTags();
        fetchEntries();
    }
    
    render() {        
        return (
            <div>
                Time Capsule
                <TagList></TagList>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchTags,
    fetchEntries,
}

export default connect(null, mapDispatchToProps)(App);
