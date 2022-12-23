import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    name: string
    id: number
}

type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemProps) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props: MessageType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

type DialogDataPropsType = {
    id: number,
    name: string
}

const Dialogs = () => {

    let dialogsData  = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>


            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How is your it-kamasutra"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>


            </div>
        </div>

    );
};

export default Dialogs;