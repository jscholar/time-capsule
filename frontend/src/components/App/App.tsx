import React, { Component } from 'react';
import TagList from '../Tag/TagList';

import './App.css';

import getTags from '../../api/getTags';
import DummyTags from '../Tag/DummyTags.json';

export interface AppState {
    tags: Object[];
}

class App extends Component<{}, AppState> {
    constructor(props) {
        super(props);
        this.state = {
            tags: DummyTags,
        }
    }

    componentDidMount() {
        getTags()
            .then((tags) => {
                this.setState({
                    tags,
                })
            })
    }
    
    render() {
        const { tags } = this.state;
        
        return (
            <div>
                Time Capsule
                <TagList tags={tags}></TagList>
            </div>
        )
    }
}

export default App;
