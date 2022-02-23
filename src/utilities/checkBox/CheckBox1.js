
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
const CheckBox1 = () => {
    return(
        <label htmlFor="check-box-1" className="cursor-pointer relative">
            <input type="checkbox" id='check-box-1' className=" appearance-none h-20 w-20 border-2 rounded-3xl
            border-plastic-pink"/>
            <FontAwesomeIcon icon={faCheck} className='text-6xl h-20 w-20 text-plastic-pink  
            absolute left-2 top-0 text-opacity-0 check-1 transition'/>  
        </label>
    );
}

export default CheckBox1
