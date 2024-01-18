import React, { useState } from 'react';
import { styled } from 'styled-components';
import { CgMenu, CgClose } from 'react-icons/cg';
import { Link } from 'react-scroll';

function Navbar() {
  const navItems = [
    { name: 'Home', path: 'home'},
    { name: 'Testimonials', path: 'testimonials'},
    { name: 'Apply', path: 'apply'}
  ];

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <StyledNavbar>
      <div className={openMenu ? 'active navbar' : 'navbar'}>
        <ul className='navbar-list'>
          {
            navItems.map((item, index) => (
              <li key={index} style={{ listStyle: 'none'}}>
                <Link
                  to={item.path}
                  className='navbar-link'
                  smooth={true}
                  duration={500}
                  onClick={() => setOpenMenu(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>

        {/* Menu icons */}
        <div className='mobile-navbar-btn'>
          <CgMenu 
            name='menu-outline' 
            className='mobile-nav-icon' 
            onClick={() => setOpenMenu(true)}
          />
          <CgClose 
            name='close-outline' 
            className='mobile-nav-icon close-icon' 
            onClick={() => setOpenMenu(false)} 
          />
        </div>
      </div>
    </StyledNavbar>
  )
}

// styled component
const StyledNavbar = styled.nav`
  .navbar-list{
    gap: 2rem;
    display: flex;
    align-items: center;

    .navbar-link{
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: ${({theme}) => theme.colors.heading};
      padding: 0.5rem 0;
      cursor: pointer;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 500;

      &:link,
      &:visited{
        font-size: 1rem;
      }

      &:hover,
      &:active{
        color: ${({theme}) => theme.colors.cyan};
        transition: color 0.3s linear;
        border-bottom: 2px solid ${({theme}) => theme.colors.cyan}
      }

      .button{
        font-size: 1.1rem;
        width: 100px;
        border-radius: 20px;
        color: ${({theme}) => theme.colors.heading};
        border: 2px solid ${({theme}) => theme.colors.heading};
        &:hover {
          color: ${({ theme }) => theme.colors.cyan};
          border: solid 2px ${({ theme }) => theme.colors.cyan};
        }
      }
    }
  }


  // mobile menu styles
  .mobile-navbar-btn{
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
  .mobile-nav-icon[name='close-outline']{
    display: none;
  }

  @media(max-width: 980px){
    .mobile-navbar-btn{
      display: inline-block;
      z-index: 9999;
      font-size: 3.2rem;
      border: ${({theme}) => theme.colors.heading};
      .mobile-nav-icon{
        color: ${({theme}) => theme.colors.heading};
      }
    }

    .active .mobile-nav-icon{
      display: none;
      z-index: 9999;
      color: ${({theme}) => theme.colors.heading};
    }

    .active .close-icon{
      display: flex;
    }

    .navbar-list{
      width: 100vw;
      position: absolute;
      top: 82px;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      opacity: 0;
      transform: translateX(100%);
      background-color: ${({theme}) => theme.colors.bg2.primary};
      visisbility hidden;

      .button{
        width: 150px !important;
        font-size: 2rem !important;
        padding: 0 !important;
        &:hover{
          color: ${({theme}) => theme.colors.cyan} !important;
          border: solid 2px ${({theme}) => theme.colors.cyan} !important;
        }
      }
    }

    .active .navbar-list{
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 9999;
      transform-origin: right;
      width: 100vw;

      .navbar-link{
        font-size: 2.2rem;
        color: ${({theme}) => theme.colors.heading};
        &:hover{
          color: ${({theme}) => theme.colors.cyan} !important;
          border-bottom: none !important;
        }
      }
    }
  }
`;

export default Navbar;