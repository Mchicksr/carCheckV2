import React from 'react';
import './singleTagCard.css'
import TagCardEditBtn from './TagCardEditBtn';
function TagCard({id,lp,carMake,carModel,violations,verified,color,address,modified,sticker}) {
    return (
        <div className='tagCard'>
            <div className="containerTc">
                <ul key={id}>
                    <h2 className="TcH2">Liecnse Plate:</h2>
                        <h4 key={lp}>{lp}</h4>
                    <h2 className="TcH2">Car Make:</h2>
                        <h4 key={carMake}>{carMake}</h4>
                    <h2 className="TcH2">Car Model:</h2>
                        <h4 key={carModel}>{carModel}</h4>
                        <TagCardEditBtn id={id} violations={violations} cm={carMake} cmo={carModel} lic={lp} color={color} address={address} modified={modified} verified={verified} sticker={sticker}/>
                </ul>
            </div>
        </div>
    );
}

export default TagCard;