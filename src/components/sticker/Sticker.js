import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {addSticker,deleteSticker,getStickers} from '../../actions/sticker'
import {Button} from '@material-ui/core'
import {format} from 'date-fns'


function Sticker({carId,manager}) {
    const stickers = useSelector((state) => state.sticker)
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getStickers())
    }, [dispatch])

    const removeSticker = () => {
        stickers.filter(sticker => {
            if(!sticker){
                return sticker
            } else if(sticker.carId === carId) {
                return sticker
            }
            return null
        }).map(item =>{
            return dispatch(deleteSticker(item._id))
        })
    }
    return (
        <div>
            <h3>Sticker Status</h3>
            {stickers.filter(sticker => {
                if(!sticker){
                    return sticker
                } else if(sticker.carId === carId){

                    return sticker
                }
        

                return null
            }).map((item,index) => {
                return  item === "" ? null :(<div key={`m${index}`}> <i className="fas fa-times" key={index}></i> <p key={`t${index}`}>{format(item.modified,'Do MMM YYYY')}</p></div>)
            })} <br/>
            {manager ? <>

            <Button variant="contained" color="primary" size="small" onClick={()=> dispatch(addSticker({sticker:carId,carId:carId}))}>Sticker</Button>           
            <Button variant="contained" color="secondary" size="small" onClick={removeSticker}>Remove</Button>
            
            </>: null}

        </div>
    );
}

export default Sticker;