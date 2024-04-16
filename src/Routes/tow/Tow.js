import React from 'react';
import TowForm from '../../components/towForm/TowForm';
import {useLocation} from 'react-router-dom'
function Tow(props) {
    const location = useLocation()
    const Lic = location.state?.Lic
    const cm = location.state?.cm
    const cmo = location.state.cmo
    const id = location.state?.id
    const violations_list = location.state?.violations_list
    // const St = location.state.St
    // const color = location.state.color
    // const address = location.state.address 
    // console.log('cmo',cmo)
    return (
        <div>
            <TowForm Lic={Lic} Cm={cm} Cmo={cmo} id={id} violations_list={violations_list}/>
        </div>
    );
}

export default Tow;