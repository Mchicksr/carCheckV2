import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getComments,createComments} from '../../actions/comments'
import { TextField, Button, Paper } from '@material-ui/core';
import CommentList from './CommentList';
import {format} from 'date-fns'
import useStyles from './styles'


function Comments({carId,address,modified}) {
    const dispatch = useDispatch()
    const classes = useStyles()
    const comments = useSelector((state) => state.comments) 
    const [commentData,setCommentData] = useState({name:"", content:""})
    const [modal,setModal] = useState(false)

    useEffect(() => {
        dispatch(getComments())
    },[dispatch])

    const switchModal = () => { 
        setModal(!modal)
    }
    const clear = () => {
        setCommentData({name:"",content:""})
    }

    const  handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(createComments({...commentData, carId:carId }))
        clear()
    }
    return (
        <div className="comments">
            <h3>Create Comments</h3>
            <Button variant="contained" color="primary" size="large" type="submit" onClick={switchModal}>Comment</Button>
            { modal ? 
                <>
            <Paper className={classes.paper}>
                <form action="" onSubmit={handleSubmit} >
                    <TextField name="name" variant="outlined" label="Name" fullWidth value={commentData.name}  required onChange={(e) => setCommentData({...commentData,name: e.target.value})}/>
                    <TextField name="content" variant="outlined" label="Comment" fullWidth value={commentData.content}  required onChange={(e) => setCommentData({...commentData,content: e.target.value})}/>
                    <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Post</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

                </form>
            </Paper>
            <h3>original comment</h3>
            {address} <br />
            <p className="dataL carSet">{format(modified, 'Do MMM YYYY')}</p>
            {comments.filter(comment => {
                if(!comment){
                    return comment
                }
                else if(carId === comment.carId){
                    return comment
                }
                return null
            }).map((item)=> (
                 <CommentList key={item._id} name={item.name} comment={item.content} modified={item.modified}/>
            ))}
                </> : null
            }
        </div>
    );
}

export default Comments;