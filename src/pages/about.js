import React from 'react'
import Case3 from '../utilities/buttons/Case3'
import CheckBox1 from '../utilities/checkBox/CheckBox1'

const About = () => {
    return (
        <div>
        {/* <div className="h-screen flex justify-center items-center bg-yellow-300">
            <h1 className="text-9xl uppercase font-black">About Page</h1>
        </div> */}
        <div class="flex items-center h-screen w-full bg-teal-lighter">
        <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <h1 class="block w-full text-center text-grey-darkest mb-6">Sign Up</h1>
          <form class="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post">
            <div class="flex flex-col mb-4 md:w-1/2">
              <label class="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest" for="first_name">First Name</label>
              <input class="border py-2 px-3 text-grey-darkest md:mr-2" type="text" name="first_name" id="first_name"></input>
            </div>
            <div class="flex flex-col mb-4 md:w-1/2">
              <label class="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2" for="last_name">Last Name</label>
              <input class="border py-2 px-3 text-grey-darkest md:ml-2" type="text" name="last_name" id="last_name"></input>
            </div>
            <div class="flex flex-col mb-4 md:w-full">
              <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Email</label>
              <input class="border py-2 px-3 text-grey-darkest" type="email" name="email" id="email"></input>
            </div>
            <div class="flex flex-col mb-6 md:w-full">
              <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="password">Password</label>
              <input class="border py-2 px-3 text-grey-darkest" type="password" name="password" id="password"></input>
            </div>
            <div class="flex flex-wrap">
              <CheckBox1/>
              <h3 class="ml-4">agree to the terms</h3>
            </div>
            <Case3></Case3>
          </form>
        </div>
      </div>
      </div>
    )
}

export default About
