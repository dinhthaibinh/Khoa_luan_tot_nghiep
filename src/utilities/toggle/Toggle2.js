import React from 'react'

const Toggle2 = () => {
    return (
        <label class="relative flex justify-between items-center p-2 text-xl">
            <input type="checkbox" class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
            <span class="w-32 h-20 flex items-center flex-shrink-0 ml-4 p-2 bg-gray-300 rounded-full 
            duration-300 ease-in-out peer-checked:bg-green-400 after:w-16 after:h-16 after:bg-white after:rounded-full 
            after:shadow-md after:duration-300 peer-checked:after:translate-x-12"></span>
        </label>
    )
}

export default Toggle2
