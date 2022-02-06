import React,{useState} from 'react';

function DateFilter({setFieldFrom, fieldFrom,onDateFilter,onDate2Filter,setData}) {
    const [filters,setFilters] = useState({
        name:"",
        email:"",
        gender:"",
        from:"",
        to:""
      })


      const [from,setFrom] = useState("")
      const [to,SetTo] = useState("")

      const handleInput= (field) => (event) => {
        const {value} = event.target;
        setFilters({
          ...filters,
          [field]:value
        })
        switch(field){
         
          case 'from':
            onDateFilter(value,"from")
            break;
          case 'to':
            onDate2Filter(value,"to")
    
            break;
          
          default:
            break;
        }
        console.log('check',field)
        
      }

    return (
        <div>
             <div className="col-sm-12 my-2">
        <label htmlFor="startDate">From</label>
        <input type="date" className="form-control" id="startDate" value={fieldFrom} onChange={handleInput('from')}/>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="endDate">To</label>
        <input type="date" className="form-control" id="endDate" />
      </div>
    </div>
    );
}

export default DateFilter;