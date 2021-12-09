import React from 'react';
// import {Link} from 'react-router-dom'
function SearchBar({searchTerm,setSearchTerm,}) {
    return (
        <div>
            <h2 className="tagSub">Tag Number</h2>
              <form>
              <label htmlFor="TagNumber"></label> 
              <input className="TFInput" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input><br></br>
              {/* <Link className="TFBtn" to={`/Profile/${searchTerm}`}>Submit</Link> */}
          </form>
        </div>
    );
}

export default SearchBar;