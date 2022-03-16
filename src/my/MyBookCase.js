import React from 'react';
// import Menu from '../Menu/Menu';
import "./MyBookCase.css"
import Menu from "../menu/Menu";

const MyBookCase = () => {
    return (
        <div className='baseContainer'>
            <Menu />
            <div className='baseContainer'>
                <div className='.flexCCCContainer'>
                    <div className='bookCase'>
                        <div className='rowBookCase'>
                            <div className='book'></div>
                        </div>
                        <div className='columBookCase'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookCase;