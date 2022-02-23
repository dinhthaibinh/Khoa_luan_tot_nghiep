import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressBook, faCheck, faCircle} from '@fortawesome/free-solid-svg-icons'

const CheckBox2 = () => {
    return (
        <label htmlFor="check-box-2" className="cursor-pointer relative">
            <input type="checkbox" id='check-box-2' className=" appearance-none h-20 w-20 border-2 rounded-full
            border-accent-color"/>
            <FontAwesomeIcon icon={faCircle} className='text-6xl h-20 w-20 text-accent-color  
            absolute left-2.5 top-0 text-opacity-0 check-2 transition'/>  
        </label>
    )
}

export default CheckBox2
