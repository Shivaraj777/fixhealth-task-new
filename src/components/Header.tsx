import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

function Header() {
  return (
    <AppHeader>
      <div className='header'>
        <div className='header-logo'>
          <img 
            src='https://ik.imagekit.io/tcfp7i31d/logo_with_yp_white_6p2ZETYLi.svg' 
            alt='app-logo' 
            loading='lazy' 
            className='logo' 
          />
        </div>
        <Navbar />
      </div>
    </AppHeader>
  )
}

// styled component
const AppHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 99;

  .header{
    display: flex;
    justify-content: apace-between;
    align-items: center;
    width: 100%;
    padding: 0 1.5rem;
    height: 100px;
  }

  .header-logo{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .logo{
    height: 4rem;
  }

  @media(max-width: 1138px){
    .header{
      background-color: ${({theme}) => theme.colors.bg2.primary};
    }
  }
`;

export default Header;