import React from 'react';
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

function CarProfile({violations, lic, cm, cmo, id, address, color, modified, sticker, manager,creator,violations_list,safe,setViolationCount}) {
    // const location = useLocation()
    // const violations = location.state?.violations
    // const lic = location.state?.lic
    // const cm = location.state?.cm
    // const cmo = location.state?.cmo
    // const id = location.state?.id
    // const st = location.state?.st
    // const address = location.state?.address
    // const color = location.state?.color
    // const modified = location.state?.modified
    // const verified = location.state?.verified
    // const sticker = location.state?.sticker
    // const manager = location.state?.manager
    // const creator = location.state?.creator
    // console.log('st',st)

    // console.log('cars',cars)
// console.log('lic',violations_list)
    return (
        <div>
            <h1>Profile</h1>
            <CarInfo violations={violations} lic={lic} cm={cm} cmo={cmo} id={id}  address={address} color={color} modified={modified}/>
            <ViolationCount id={id} violations_list={violations_list} lic={lic} setViolationCount={setViolationCount}/>
            {/* <ViolationBtn violations={violations} id={id} lic={lic}/> */}
            {/* <Verify id={id} verified={verified} manager={manager}/> */}
            <SafeStatus id={id} safe={safe}/>
            <SafeBtn id={id} safe={safe}/>
            {/* <Sticker carId={id} sticker={sticker} manager={manager}/> */}
            <TowBtn lic={lic} cm={cm} cmo={cmo}  color={color} address={address}/>
            <Comments carId={id} address={address} modified={modified}/>
            <DeleteCarBtn id={id} manager={manager} creator={creator}/>
        </div>
    );
}

export default CarProfile;

// Location is coming from: TagCardEditBtn