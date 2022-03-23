import React from 'react';
import CarForm from '../../components/carForm/CarForm';
function CarEntryForm({communities,user,setSearchTerm}) {

    return (
        <div>
            {user?<>
            <h1>Violation Form</h1>
            <CarForm communities={communities} setSearchTerm={setSearchTerm}/>

            </>:<h1>Please Login</h1>}
        </div>
    );
}

export default CarEntryForm;