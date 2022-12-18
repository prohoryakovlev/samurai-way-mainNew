import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <div>
                    <img
                        src="https://www.ola.ua/photo/Tsokkos_Paradise_Holiday_Village_291499.jpg?width=800&height=600"/>
                </div>
                <div className={s.descriptionBlock}>
                    ava + description
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;