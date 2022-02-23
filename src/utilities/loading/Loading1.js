import React from 'react'

const Loading1 = () => {
    return (
        <div class='loader bg-white p-5 rounded-full flex space-x-3'>
            <div class="bg-blue-600 p-2  w-5 h-5 rounded-full animate-bounce blue-circle"></div>
            <div class="bg-green-600 p-2 w-5 h-5 rounded-full animate-bounce green-circle"></div>
            <div class="bg-red-600 p-2  w-5 h-5 rounded-full animate-bounce red-circle"></div>
        </div>
    )
}

export default Loading1
