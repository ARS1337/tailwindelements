import React, { useContext, useReducer } from 'react';
import { MyContext,MyReducer,state } from '../ContextStore';

function Test(props) {
    const [contextData,dispatch] = useReducer(MyReducer,state)
    console.log("contextData ",contextData)
    return (
        <div className='flex items-center justify-center'>
            <input value={contextData.email} onChange={e=>{dispatch({type:'SET_EMAIL',payload:e.target.value})}}/>
            <button onClick={()=>{alert(contextData.email)}}>setEmail</button>
        </div>
    );
}

export default Test;