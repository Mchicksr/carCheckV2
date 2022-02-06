import React,{useState} from 'react';

function Log({onCarFilter,onDateFilter}) {
    const [filters,setFilters] = useState({
        name:"",
        car_make:"",
        gender:"",
        from:"",
        to:""
      })

    const [email,setEmail] = useState("")


    const handleInput= (field) => (event) => {
        const {value} = event.target;
        setFilters({
          ...filters,
          [field]:value
        })
        switch(field){
        //   case 'name':
        //     onNameFilter(value)
        //     break;
          case 'email':
            onCarFilter(value)
            break;
        //   case 'gender':
        //     onGenderFilter(value)
        //     break;
          case 'from':
            onDateFilter(value,"from")
            break;
        //   case 'to':
        //     onDate2Filter(value,"to")
    
        //     break;
          
          default:
            break;
        }
        
        console.log('check',field)
      }

    return (
        <div>
           
      <div className="col-sm-12 my-2">
        <label htmlFor="startDate">From</label>
        <input type="date" className="form-control" id="startDate" onChange={handleInput("from")}/>
      </div>
        </div>
    );
}

export default Log;