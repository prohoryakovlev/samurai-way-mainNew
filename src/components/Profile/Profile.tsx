import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";



const Profile = () => {
    return (
            <div>
                <div>
                    <img src="https://www.ola.ua/photo/Tsokkos_Paradise_Holiday_Village_291499.jpg?width=800&height=600"/>
                </div>
                <div>
                    ava + description
                </div>
                <MyPosts/>
            </div>
    );
};

export default Profile;