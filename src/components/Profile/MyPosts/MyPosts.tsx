import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";
import app from "../../../App";

type MyPostPropsType = {
    post: PostPropsType
}


type PostPropsType = {
    id: number
    message: string
    likeCount: number
}

const MyPosts = (props: any) => {

    let post = [
        {id: 1, message: "Hi, how are you?", likeCount: 12},
        {id: 2, message: "It s my first post", likeCount: 11},
        {id: 3, message: "asdasdasd", likeCount: 13},
        {id: 4, message: "dadada", likeCount: 14},
    ]

    let postElement = post.map(p => <Posts message={p.message} likeCount={p.likeCount}/>)

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

                {postElement[0]}
                {postElement[1]}
                {postElement[2]}
                {postElement[3]}


            </div>
        </div>
    )
};

export default MyPosts;