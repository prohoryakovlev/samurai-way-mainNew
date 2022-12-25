import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import posts from "./MyPosts/Post/Posts";

const Profile = () => {

    //
    // let posts = [
    //     {id: 1, message: "Hi, how are you?", likeCount: 12},
    //     {id: 2, message: "It s my first post", likeCount: 11},
    //     {id: 3, message: "asdasdasd", likeCount: 13},
    //     {id: 4, message: "dadada", likeCount: 14},
    // ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts />
        </div>
    );
};

export default Profile;