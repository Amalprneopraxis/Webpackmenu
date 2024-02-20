import React from 'react';
import Navmenu from './components/common/Navmenu';
import './components/headers/Megamenu.css'

const Megamenu = () => {
    return (
        <>
            <div className='main-container'>
                <div className='title'>Add versioning @</div>
                <div className='datas'>Exported component for other project</div>
                <p>City: New York</p>
                <Navmenu/>
            </div>
        </>
    );
};

// Attach Megamenu to the window object
window.Megamenu = Megamenu;

export default Megamenu;