import React from 'react';
import dayjs from "dayjs";
import './singleTagCard.css'
import TagCardEditBtn from './TagCardEditBtn';
// import Verify from '../../profile/Verify';
import Sticker from '../../sticker/Sticker';
import SafeStatus from '../../profile/SafeStatus';
import { useSelector } from 'react-redux';
function TagCard({id,lp,carMake,carModel,violations,verified,color,address,modified,sticker,manager,creator,community,safeStatus, safe,violationCount,image}) {
    const cars = useSelector((state) => state.cars)
    const newNum = cars?.filter((car)=>{
               

        if(car.community_id === community){
            return car
        }

    }).map(num => num.violations_list.length)
    return (
        <div className='tagCard' key={id}>
            <div className="containerTc">
                <ul key={id}>
                    <h2 className="TcH2">License Plate:</h2>
                        <h4 key={lp}>{lp.toUpperCase()}</h4>
                    <h2 className="TcH2">Car Make:</h2>
                        <h4 key={carMake}>{carMake}</h4>
                    <h2 className="TcH2">Car Model:</h2>
                        <h4 key={carModel}>{carModel}</h4>
                        <SafeStatus id={id} safe={safe}/>
                    <h3>Violations</h3>
                        <h4 className={newNum >= 3 ? 'violation-status-error' : null}>{newNum}</h4>

                        <Sticker carId={id}/>
                    <p>
                    {dayjs(modified).format("DD MMMM YYYY")}
                    </p>
                        <TagCardEditBtn id={id} violations={violations} cm={carMake} cmo={carModel} lic={lp} color={color} address={address} modified={modified} verified={verified} sticker={sticker} manager={manager} creator={creator} community={community} carImage={image}/>
                </ul>
            </div>
        </div>
    );
}

export default TagCard;