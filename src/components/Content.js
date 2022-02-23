//"rafce" creat form
import React from 'react'
import ImageOne from '../images/house_in_city.jpg'
import ImageTwo from '../images/feature_concrete.jpg'
import Case4 from '../utilities/buttons/Case4.js'

const Content = () => {
    return (
        <>
        <div className="menu-card">
            <img src={ImageOne} alt="house" className="h-full rounded mb-20 shadow"/>
            <div className="center-content">
                <h2 className="text-2xl mb-2">House In The HaNoi</h2>
                <p classname="mb-2">Beauty, comfortable</p>
                <span>$3000</span>
                <Case4/>
            </div> 
        </div>

        <div className="menu-card">
            <img src={ImageTwo} alt="house" className="h-full rounded mb-20 shadow"/>
            <div className="center-content">
                <h2 className="text-2xl mb-2">House In The HoChiMinh</h2>
                <p classname="mb-2">Beauty, comfortable</p>
                <span>$4000</span>
                <Case4/>
            </div>
        </div>
        </>
    )
}

export default Content
