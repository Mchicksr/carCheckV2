import React,{useState} from 'react';
// import CommunityNav from '../../components/tagPage/community/CommunityNav';
import FindCarIndex from '../../components/carIndex/CarIndex';
import LogCsv from '../../components/carIndex/LogCsv';
import LogPdf from '../../components/carlog/LogPdf';
import CarPdf from '../filter/CarPdf';
import { PDFDownloadLink } from '@react-pdf/renderer';

// import ''
const CarIndex = ({manager}) => {
    const [openPdf, setOpenPdf] = useState(false)
    console.log('manager',manager)
    return (
        <div>
            {manager ?
                <>
                    <h1>index</h1>
                <div className="pb-3"><LogCsv/></div> 
                <button className="btn btn-primary mb-4" onClick={() => setOpenPdf(!openPdf)}>{openPdf ? 'Close View ': 'View PDF'}</button>
                    {openPdf ? 
                    <>
                    <div className="pb-3 bg-white">
                        <CarPdf/> 
                    </div> 
                    </>
                    
                    : null}
                {/* <div className="pb-3"><LogPdf/></div>  */}
                    <FindCarIndex/>  
                </>
                :
                <><h1>Authorized Personal Only</h1></>
           
            }
        </div>
    );
}

export default CarIndex;
