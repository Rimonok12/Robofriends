import React from 'react';



const Scroll=(props)=>{
    // return props.children;
    return(
    <div style={{
        overflow:'scroll',
        border:'0.5px dashed white',
        height:'800px'}}>

        {props.children}
    
    </div>
    );
}

export default Scroll;