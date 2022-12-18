import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

            <div className={s.posts}>

                <Posts likeCount={23} message={"Hi, how are you?"}/>
                <Posts likeCount={0} message={"It s my first post"}/>


            </div>
        </div>
    )
};

export default MyPosts;