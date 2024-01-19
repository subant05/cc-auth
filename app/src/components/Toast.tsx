import React, {useEffect} from 'react'
import classes from './Toast.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { messageActions } from '../store/messages';

const Toast = () => {
    const dispatch = useDispatch()
    const messages = useSelector((state:any)=>state.messages.messages)

    useEffect(()=>{
        console.log(messages)
        if(messages.length)
            setTimeout(()=>{
                dispatch(messageActions.removeMessages())
            }, 5000)

    }, [messages, dispatch])



  return (
    <div className={`${classes.Toast} ${messages.length ? classes.Show : '' }`}>
        <ul>
            {messages.map((message:string)=><li>{message}</li>)}
        </ul>
    </div>
  )
}

export default Toast