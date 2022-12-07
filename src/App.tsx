import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
        </div>
    );
}

const Technologies = () => {
    return (
        <ul>
            <li>html</li>
            <li>css</li>
            <li>js</li>
            <li>React</li>
        </ul>
    )
}

const Header = () => {
    return (
        <div>
            <a href="">Home</a>
            <a href="">News Feed</a>
            <a href="">Messages</a>
        </div>
    )
}

export default App;
