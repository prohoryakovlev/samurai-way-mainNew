import React from 'react';
import './App.css';


function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://wallbox.ru/resize/1280x720/wallpapers/main/201351/c926b6a08c46eef.jpg"/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img
                        src="https://wallbox.ru/resize/1400x1050/wallpapers/main2/201719/more-plaz-palmy-tropiki1.jpg"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            Post1
                        </div>
                        <div>
                            Post1
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
