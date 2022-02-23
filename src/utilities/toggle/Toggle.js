import React from 'react'

const Toggle = () => {
    return (
        <label htmlFor="toggle-switch">
            <input type="checkbox" id='toggle-switch' className='cursor-pointer h-20 w-40 rounded-full 
            appearance-none bg-white bg-opacity-5 
            border-2 border-green-14F2E0 checked:bg-gray-400 transition duration-200 relative'/>
        </label>
    )
}

export default Toggle
