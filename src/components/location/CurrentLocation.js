import React, {useEffect} from 'react';

const CurrentLocation = () => {
    useEffect(() => {
        try {          
            navigator.geolocation.getCurrentPosition((position)=>{
                console.log(position)
            })
        } catch (error) {
            console.error("Error Code = " + error.code + " - " + error.message);
        } 
     
    }, []);

       
        return (
            <div>
                location
            </div>
        );
      }

export default CurrentLocation;
