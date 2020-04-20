import React, { Component } from 'react';
import TagList from '../Tag/TagList';

import DummyTags from '../Tag/DummyTags.json';
import TagForm from '../Tag/TagForm';

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
    
    render() {
        const { tags } = this.state;
        
        return (
            <div>
                Time Capsule
                <TagList tags={tags}></TagList>
                <TagForm></TagForm>
            </div>
        )
    }
}

export default App;
