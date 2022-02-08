import React from 'react';
import { useLocation } from "react-router-dom"
import CarInfo from '../../components/profile/CarInfo';
import TowBtn from '../../components/profile/TowBtn';
import ViolationBtn from '../../components/profile/ViolationBtn'
import Verify from '../../components/profile/Verify';
import './carProfile.css'
import Sticker from '../../components/sticker/Sticker';
import Comments from '../../components/comments/Comments';
import DeleteCarBtn from '../../components/profile/DeleteCarBtn';

function CarProfile(props) {
    
    const location = useLocation()
    const violations = location.state?.violations
    const lic = location.state?.lic
    const cm = location.state?.cm
    const cmo = location.state?.cmo
    const id = location.state?.id
    const st = location.state?.st
    const address = location.state?.address
    const color = location.state?.color
    const modified = location.state?.modified
    const verified = location.state?.verified
    const sticker = location.state?.sticker
    const manager = location.state?.manager
    const creator = location.state?.creator

    return (
        <div>
            <h1>Profile</h1>
            <CarInfo violations={violations} lic={lic} cm={cm} cmo={cmo} id={id} st={st} address={address} color={color} modified={modified}/>
            <ViolationBtn violations={violations} id={id} lic={lic}/>
            <Verify id={id} verified={verified} manager={manager}/>
            <Sticker carId={id} sticker={sticker} manager={manager}/>
            <TowBtn lic={lic} cm={cm} cmo={cmo} st={st} color={color} address={address}/>
            <Comments carId={id} address={address} modified={modified}/>
            <DeleteCarBtn id={id} manager={manager} creator={creator}/>
        </div>
    );
}

export default CarProfile;

// Location is coming from: TagCardEditBtn