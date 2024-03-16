import React from 'react';
import CreateCommunity from '../../components/community/CreateCommunity';
import AdminTab from '../../components/admin/AdminTab';

function Admin(props) {
    return (
        <div>
            <div className="container">
                <div className="row justify-conetnt-center" style={{flexDirection:"column"}}>
                    <AdminTab/>
                </div>
            </div>
        </div>
    );
}

export default Admin;