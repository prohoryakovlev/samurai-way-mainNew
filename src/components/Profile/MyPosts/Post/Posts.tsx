import React from 'react';
import s from './Posts.module.css';

const Posts = (props: any) => {
    return (
        <div className={s.item}>
            <img src="https://sun9-75.userapi.com/impg/bBKdP5AFq1kDbb0jdGHWyd1tteNOWKQjOQui3A/6lXvqAo5vyw.jpg?size=95x130&quality=96&sign=58bcba2039688f2ea2dd3c1fa5e214c6&c_uniq_tag=3RyIKuRp_Fn82-C9OnBFour5xfxr26zV0m5tZiJmgb4&type=album"/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>


        </div>
    );
};

export default Posts;