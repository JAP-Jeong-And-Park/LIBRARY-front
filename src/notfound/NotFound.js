import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='baseContainer'>
            <div>페이지 못찾음 ㅅㄱ</div>
            <Link to='/'>메인페이지로 가기</Link>
        </div>
    );
};

export default NotFound;