import React from 'react';

const SearchBox=({searchfield ,sC})=>{
    return(
        <div className="pa2 b--none br3 ba">
        <input 
            type='Search' 
            placeholder='Search Robots'
            onChange={sC}
        />
        </div>    
    );
}

export default SearchBox;