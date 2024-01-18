import React from 'react';
import styled from 'styled-components';

function HeroSection() {
  return (
    <StyledHeroSection className='hero-section' id='home'>
      <div className='custom-container'>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
          {/* Welcome message */}
          <div className='hero-section-data'>
            <p>Welcome to</p>
            <h1 className='font-bold'>FixHealth</h1>
            <p>
              Experience the Benefits of Advanced Technology and Expert Care..
            </p>
          </div>
        </div>
      </div>
    </StyledHeroSection>
  )
}

const StyledHeroSection = styled.section`
  position: relative;
  // padding-top: 140px;
  background: url("/images/doctor-image.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  text-align: left;
  overflow: hidden;

  .custom-container{
    position: relative;
    z-index: 1;
    display: flex;
    height: 100%;
    align-items: center;
  }

  .hero-section-data{
    width: 40%;
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .higlight{
      color: #1c77ed;
    }

    h1 {
      font-size: calc(1.1rem + 28 * (100vw - 320px) / 1600);
      font-weight: 800;
      margin-bottom: 17px;
      line-height: 1.2;
      max-width: 680px;
    }
    p {
      font-size: calc(1.2 * (1rem + 3 * (100vw - 320px) / 1600));
      margin: 0 0;
      max-width: 750px;
      font-weight: 600;
      font-family: Roboto, sans-serif;
      line-height: 1.8;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  // media queries
  @media(min-width: ${({ theme }) => theme.media.mobile}){
    .custom-container{
      padding: 0 5rem;
    }
  }

  @media(max-width: ${({ theme }) => theme.media.mobile}){
    padding: 0rem 0rem;
    
    .custom-container{
      padding: 0;
    }

    .hero-section-data{
      margin-top: 85px;
      h1{
        font-size: 1.5rem;
      }
      p{
        font-size: 1.2rem;
        line-height: 1.4;
      }
      h1,
      p{
        text-align: center;
      }
    }
  }
`;

export default HeroSection;