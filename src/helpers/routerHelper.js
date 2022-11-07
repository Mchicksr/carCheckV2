import React from "react"
import dayjs from "dayjs"

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
console.log('car:','DF3G4WW')
// const no ="No Cars"
// const handleFilterDate = (date,field) => {
//   const filteredData = cars.filter(item => {
//     if(field == 'from' && dayjs(item.modified).isSameOrAfter(date)){
//       return item
//     } 
//   })
//   setData(filteredData)
// }

// const handleFilterDate2 = (date, field) => {
//   const filteredData = cars.filter((item) => {
//     if (field === "to" && dayjs(item.modified).isSameOrBefore(dayjs(date))) {
//       return item;
//     }
//   });

//   setData(filteredData);
// };
 const renderCarTags = (Route,cars,TagCard,searchTerm,manager,creator,safe,show,setShow) => {

    const row = ['/Tags','/Tags/:urlId'].map((path,index) => (
        <div key={`k${index}`}>
          <Route
          exact
            key={index}
            path={path}
            render={routerProps => {
            const {urlId} = routerProps.match.params
    
            return cars.filter(car => {
               if(!car){
                return car
              }
              else if(car.community_id === urlId){
                
                return car
              }
            }).filter((val)=>{
              if(searchTerm == ""){
                  return val
              
              } else if(searchTerm == 0){
                return val
              }
              else if(val.license_plate.toLowerCase().includes(searchTerm.toLowerCase())){

                  return val
              }
              return null
          }).filter((val) => {
            if(!safe){
              return val
            } else if(safe && val.verified[0]){
              return val
            }

          }).map((item,index) => (
            
            
            <li key={`li${index}`}>
             {
             
              <TagCard
              key={index}
                      id={item._id}
                      lp={item.license_plate}
                      carMake={item.car_make}
                      carModel={item.car_model}
                      violations={item.violations}
                      verified={item.verified}
                      color={item.color}
                      address={item.car_address}
                      modified={item.modified}
                      community={item.community_id}
                      sticker={item.sticker}
                      manager={manager}
                      creator={creator}
                  />
          }
                  </li>
         
            ))
            }
          }
          />    
        </div>
      ))
      return row
}

export default renderCarTags