import {useState} from 'react';

const Number =({currentCount})=>{
    return  <div style={{backgroundColor:"pink",padding:"10px"}}>
        <p>User : {currentCount}</p>
    </div>
}
export default Number;
