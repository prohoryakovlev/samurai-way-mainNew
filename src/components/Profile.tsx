import React from 'react';
import s from './Profile.module.css';
const Profile = () => {
    return (
            <div className={s.content}>
                <div>
                    <img
                        src="https://www.ola.ua/photo/Tsokkos_Paradise_Holiday_Village_291499.jpg?width=800&height=600"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div className={s.posts}>
                        <div className={s.item}>
                            Post1
                        </div>
                        <div className='item'>
                            Post1
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Profile;