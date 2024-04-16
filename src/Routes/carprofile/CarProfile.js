import React, { useState} from 'react';
// import { useLocation } from "react-router-dom"
import CarInfo from '../../components/profile/CarInfo';
import TowBtn from '../../components/profile/TowBtn';
// import ViolationBtn from '../../components/profile/ViolationBtn'
// import Verify from '../../components/profile/Verify';
import ViolationCount from '../../components/profile/ViolationCount';
import './carProfile.css'
// import Sticker from '../../components/sticker/Sticker';
import Comments from '../../components/comments/Comments';
import DeleteCarBtn from '../../components/profile/DeleteCarBtn';
import SafeStatus from '../../components/profile/SafeStatus';
import SafeBtn from '../../components/profile/SafeBtn';
import SaveImage from '../../components/saveImage/SaveImage';
import SaveImage2 from '../../components/saveImage/SaveImage2';
// import AutoTow from '../../components/profile/autoTow';
// console.log('93Bayy')

function CarProfile({violations, lic, cm, cmo, id, address, color, modified, sticker, manager,creator,violations_list,safe,setViolationCount,communityID,image,autoTow}) {
    const Url = new URL(window.location)
    const [imageID,setImageID] = useState('')
    const getUrlPart = (url) => {
        const regex = /\/Tags\/(\w+)\//; // Regex pattern to match the desired part
        const match = url.match(regex);
        if (match && match.length > 1) {
          return match[1];
        }
        return null; // Return null if no match found
      };
     const ComId = getUrlPart(Url.pathname)
    //  const [immidiateTow, setImmidiateTow] = useState(false)
    return (
        <div>
            <h1>Profile</h1>
            <CarInfo violations={violations} lic={lic} cm={cm} cmo={cmo} id={id}  address={address} color={color} modified={modified}/>
            <SaveImage2 lp={lic} setImageID={setImageID} carImages={image} id={id}/>
            <ViolationCount id={id} violations_list={violations_list} lic={lic} setViolationCount={setViolationCount} communityID={communityID} comID={ComId} manager={manager} autoTow={autoTow}/>
            {/* <AutoTow setImmidiateTow={setImmidiateTow} immidiateTow={immidiateTow}/> */}
            <SafeStatus id={id} safe={safe}/>
            <SafeBtn id={id} safe={safe} manager={manager}/>
            <TowBtn id={id} lic={lic} cm={cm} cmo={cmo}  color={color} address={address} ComId={ComId} violations_list={violations_list}/>
            <Comments carId={id} address={address} modified={modified}/>
            <DeleteCarBtn id={id} manager={manager} creator={creator} imageID={imageID}/>
        </div>
    );
}

export default CarProfile;

// Location is coming from: TagCardEditBtn