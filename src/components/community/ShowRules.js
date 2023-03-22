import React,{useState,useEffect, useCallback} from 'react';
import './showRules.css'

const ShowRules = ({communities}) => {
    const [commID,setCommId] = useState('')
    const [open, setOpen] = useState(false)
    const Url = new URL(window.location)
    

    
    // const createId = () =>{
    //     const newStr = Url.pathname.split('s/')
    //     setCommId(newStr[1])

    // }
    const createId = useCallback(()=>{
        const newStr = Url.pathname.split('s/')
        setCommId(newStr[1])
    },[Url.pathname])
    useEffect(() => {
        createId()   
    }, [commID,createId]);
   
    const openRules = () => {
       const rules =  communities.filter((comm)=>{
        if(commID === comm._id){
            return comm
        }
        return null
       }).map((comm,index) => {
        return comm.rules.map((item,index )=> <h2 key={`1${index}`}className="d-block">{item}</h2>)   


            // return <ul key={`K${index}`}>
            //             <li key={index}>{comm.rules}</li>
            //         </ul>
        })
        return rules
    }

    return (
        <div>
            <button className="btn-primary my-4" onClick={() => setOpen(!open)}>Open Rules</button>
            <div className={!open ? 'rulesModalClose' : 'rulesModalOpen'}>
            { openRules()}
            </div>
            
        </div>
    );
}

export default ShowRules;
