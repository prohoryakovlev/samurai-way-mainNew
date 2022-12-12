import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";



const MyPosts = (props: any) => {
    return (
            <div>
                My posts
                <textarea></textarea>
                <button>Add post</button>

                <div className={s.posts}>

                    <Posts likeCount={23} message={"Hi, how are you?"}/>
                    <Posts likeCount={0} message={"It s my first post"}/>



                </div>
            </div>
    )
};

export default MyPosts;