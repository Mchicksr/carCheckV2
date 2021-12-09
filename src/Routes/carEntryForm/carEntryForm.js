import React from 'react';
import CarForm from '../../components/carForm/CarForm';
function CarEntryForm({communities}) {

    return (
        <div>
            <h1>Violation Form</h1>
            <CarForm communities={communities}/>
        </div>
    );
}

export default CarEntryForm;