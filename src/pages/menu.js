//rafce

import React from 'react';
import Checkbox1 from '../utilities/checkBox/CheckBox1'
import Checkbox2 from '../utilities/checkBox/CheckBox2'
import Toggle from '../utilities/toggle/Toggle';
import Toggle2 from '../utilities/toggle/Toggle2';
import Case1 from '../utilities/buttons/Case1';
import Case2 from '../utilities/buttons/Case2';
import Case3 from '../utilities/buttons/Case3';
import Case4 from '../utilities/buttons/Case4';
import Case5 from '../utilities/buttons/Case5';
import Loading1 from '../utilities/loading/Loading1';
import Loading2 from '../utilities/loading/Loading2';
import Loading3 from '../utilities/loading/Loading3';
import Toats1 from '../utilities/toats/Toats1';
import Toats2 from '../utilities/toats/Toats2';
import Card1 from '../utilities/cards/Card1';
import Card2 from '../utilities/cards/Card2';
import Table from '../utilities/table/Table';
import Timeline from '../utilities/timeline/Timeline';

const Menu = () => {
    return (
        <>
        <div className="h-screen flex flex-col justify-center items-center bg-blue-400">
            <h1 className="text-5xl uppercase font-black">Menu</h1>
            <div class="flex flex-col items-center mt-8">
                <span class="text-3xl font-black">Checkboxes</span>
                
            </div>
        </div>
        <div className="py-24 flex flex-row space-x-4 justify-center items-center bg-blue-300">
            <Checkbox1/>
            <Checkbox2/>
        </div>
        <div className="py-24 flex flex-row space-x-2 justify-center items-center bg-blue-200">
            <Toggle/>
            <Toggle2/>
        </div>
        <div className="py-24 flex flex-row space-x-2 justify-center items-center bg-blue-100">
            <Case1/>
            <Case2/>
            <Case3/>
            <Case4/>
            <Case5/>
        </div>
        <div className="py-24 flex flex-row space-x-2 justify-center items-center bg-blue-100">
            <Loading1/>
            <Loading2/>
            <Loading3/>
        </div>
        <div className="py-24 flex flex-row space-x-5 justify-center items-center bg-blue-100">
            <Toats1/>
            <Toats2/>
        </div>
        <div className="py-24 flex flex-row space-x-5 justify-center items-center bg-blue-100">
            <Card1/>
            <Card2/>
        </div>
        <div className="py-24 flex flex-row space-x-5 justify-center items-center bg-blue-100">
            <Table/>
        </div>
        <div className="py-24 flex flex-row justify-center items-center bg-blue-100">
            <Timeline/>
        </div>
        </>
    )
}

export default Menu
