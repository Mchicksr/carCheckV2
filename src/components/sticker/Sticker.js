import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {addSticker,deleteSticker,getStickers} from '../../actions/sticker'

function Sticker({carId}) {
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
            }).map(item => {
                return  item === "" ? null : 'stickerd'
            })} <br/>

            <button onClick={()=> dispatch(addSticker({sticker:carId,carId:carId}))}>Sticker</button>           
            <button onClick={removeSticker}>Remove</button>

        </div>
    );
}

export default Sticker;