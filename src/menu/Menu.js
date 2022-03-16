import React from 'react';
import "./Menu.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';

// 테스트 이미지


const Menu = () => {

    const [showProfileMenu, setShowProfileMenu] = useState()
    const showProfileMenus = () => setShowProfileMenu(!showProfileMenu)
    return (
        <div className='menuBase'>
            <div className='splitMenu'>
                <div className='sideMenuWrapper'>로고 테스트</div>
                <div className='sideMenuWrapper'>
                    <div className='menuNew'>글 쓰기</div>
                    <Link to="/search">검색</Link>
                    <div className='profileMenu'onClick={showProfileMenus}>
                        프로필사진
                    {
                        showProfileMenu ? <div className='profileMenus'>
                            <Link className='menu' to="/my">내 프로필</Link>
                            <div className='menu' to="">임시 글</div>
                            <div className='menu'>읽기 목록</div>
                            <div className='menu'>설정</div>
                            <div className='menu'>로그아웃</div>
                        </div> : null
                    }
                    
                    </div>
                </div>
            </div>
            <div className='splitMenu'>
                <div className='sideMenuWrapper'>
                    <div>트렌딩</div>
                    <Link to="/">
                        최신
                    </Link>
                </div>
                {/* <div className='sideMenuWrapper'>메뉴3</div> */}
            </div>
        </div>
    );
};

export default Menu;