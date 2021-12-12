import React from 'react';
import TowForm from '../../components/towForm/TowForm';
import {useLocation} from 'react-router-dom'
function Tow(props) {
    const location = useLocation()
    const Lic = location.state?.Lic
    const cm = location.state?.cm
    const cmo = location.state.cmo
    // const St = location.state.St
    // const color = location.state.color
    // const address = location.state.address 
    // console.log('cmo',cmo)
    console.log('cm',cm)
    return (
        <div>
            <TowForm Lic={Lic} Cm={cm} Cmo={cmo}/>
        </div>
    );
}

export default Tow;