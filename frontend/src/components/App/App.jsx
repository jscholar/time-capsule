import React, { Component } from 'react';
import TagList from '../Tag/TagList';

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
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

export default App;
