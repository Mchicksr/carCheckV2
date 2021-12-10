import React from 'react';
import CommunityNav from '../../components/tagPage/community/CommunityNav';
import SearchBar from '../../components/tagPage/SearchBar';

function Tags({renderCarTags, Route, cars, TagCard,searchTerm, setSearchTerm,manager,user}) {
    return (
        <div>
            {user?<>
            <h1>Car Tags</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <CommunityNav/>
            {renderCarTags(Route,cars,TagCard,searchTerm,manager)}
            
            </>:<h1>Please Login</h1>}
        </div>
    );
}

export default Tags; 