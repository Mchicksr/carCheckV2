import React from 'react';
import CommunityNav from '../../components/tagPage/community/CommunityNav';
import SearchBar from '../../components/tagPage/SearchBar';

function Tags({renderCarTags, Route, cars, TagCard,searchTerm, setSearchTerm}) {
    return (
        <div>
            <h1>Car Tags</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <CommunityNav/>
            {renderCarTags(Route,cars,TagCard,searchTerm)}
        </div>
    );
}

export default Tags; 