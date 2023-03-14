import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import { createCommunity,createRules } from '../../actions/community';


const CreateCommunity = () => {
    const[commuteName, setCommuteName] = useState('')
    const [preRules, setPreRules]  = useState('')
   
    const dispatch = useDispatch()


    useEffect(() => {
       
        
    }, [preRules]);
    
    const clear = () => {
        setCommuteName("")
        setPreRules("")
    }

     const convertStrToArr = async ()  =>  {
         let newArr = []

         newArr = preRules.split(',')
         console.log('newArr',newArr)
         dispatch(createRules(commuteName, newArr))

        
    }

    const setCommunity = (e) =>{
        e.preventDefault()
        dispatch(createCommunity({community:commuteName}))
        console.log('name,',commuteName)

       const hold = setInterval(() => {
            convertStrToArr()            
            }, 3000);

       
       
        return [
            hold,
            setInterval(() => {
                clearInterval(hold)
                
            }, 5000),
            clear()
        ]

    }
 
    return (
        <div>
            <div className="container">
            <div className="col-6 offset-3">

          
            <form action="" onSubmit={setCommunity}>
                <div className="form-group">
                    <label htmlFor="name">Community Name</label>
                    <input type="text" className="form-control" id="name" value={commuteName} onChange={(e) => setCommuteName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="rule">Community Rule</label>
                    <textarea className="form-control" id="rule" rows="3"  value={preRules} onChange={(e) => {setPreRules(e.target.value)}}/>
                </div>
                <button type="submit" className="btn-primary btn-lg">Submit</button>
            </form>
            </div>
            </div>
        </div>
    );
}

export default CreateCommunity;
