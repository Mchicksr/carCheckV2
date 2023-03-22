import React, { useEffect } from 'react';
import { getCommunities } from '../../../actions/community';
import { useDispatch, useSelector } from 'react-redux';
import CommunityLink from './CommunityLink';
// import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
import './community.css'


function CommunityNav(props) {
    const community = useSelector((state) => state.communities)
    const dispatch = useDispatch()

    const [value, ] = React.useState(0);

    // const handleChange = (event, newValue) => {
        // setValue(newValue);
    // };

    useEffect(() => {
        dispatch(getCommunities())
    }, [dispatch])

    // const communities = () => (
    //     <>


    //         <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}>
    //             <Tabs
    //                 value={value}
    //                 onChange={handleChange}
    //                 variant="scrollable"
    //                 scrollButtons
    //                 allowScrollButtonsMobile
    //                 aria-label="scrollable force tabs example"
    //             >
    //                 {
    //                     community.map((item, index) => {
    //                         return <li key={item._id}><CommunityLink key={item.id} _id={item._id} name={item.community} Tab={Tab} /></li>
    //                     })
    //                 }

    //             </Tabs>
    //         </Box>


    //     </>
    // )
    const communities = () => (
        <>
            <div className="nav-c-parent">

            <div className="d-flex nav-container">

            {
                community.map((item) => {
                    return <li key={item._id}><CommunityLink key={item.id} _id={item._id} name={item.community} Tab={Tab} value={value}/></li>
                })
            }
            </div>
            </div>


        </>
    )


    return (
        <div>
            {communities()}
            {/* <h1>hey</h1> */}
        </div>
    );
}

export default CommunityNav;