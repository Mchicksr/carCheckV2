import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CreateCommunity from '../community/CreateCommunity';
import ViolationList from './ViolationList';
function AdminTab(props) {
    const [key, setKey] = useState('home');

    return (
        <>
            
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 justify-content-center justify-content-around mb-5"
                >
                    <Tab eventKey="Community" title="Community">
                        <CreateCommunity/>
                    </Tab>
                    <Tab eventKey="violations" title="Violations">
                        <ViolationList/>
                    </Tab>
                    {/* <Tab eventKey="contact" title="Contact" >
                        Tab content for Contact
                    </Tab> */}
                </Tabs>
        </>

    );
}

export default AdminTab;