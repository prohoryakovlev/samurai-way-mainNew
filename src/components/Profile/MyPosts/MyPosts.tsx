import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts

                <textarea></textarea>
                <button>Add post</button>

                <div className={s.posts}>

                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>

                </div>
            </div>
        </div>
    )
};

export default MyPosts;