import React from 'react';
import {Button} from '@material-ui/core'
import './safelist.css'

function SafeList({safe,setSafe}) {
    return (
        <div>
            <Button className={!safe ? "safe" : "safeOn"} variant="contained" size="small" onClick={()=> setSafe(!safe)}>Safe List</Button>
        </div>
    );
}

export default SafeList;