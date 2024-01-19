import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { doctorData } from '../data/data';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function DoctorResults(props: any) {
  const { city } = useParams();
  // let doctors = props.doctors;
  const [doctors, setDoctors] = useState(props.doctors)

  // update doctors on hnage in uri
  useEffect(() => {
    const updatedDoctors = doctorData.filter((data) => data.city === city);
    setDoctors(updatedDoctors);
  }, [city]);

  return (
    <StyledResults>
      <div className='custom-container'>
        <div className='data-container'>
          <div className='data-header'>
            Here are our specialist doctors
          </div>

          <div className='doctors-info'>
            {doctors.map((data: any) => (
              <div key={data.id} className='doctor-card'>
                <div className='doc-img'>
                  <img src={data.profile} alt='doc-img' height='100px' width='100px' />
                </div>

                <div className='doc-data'>
                  <p><b>Name: </b>{data.name}</p>
                  <p><b>Field Of Expertice: </b>{data.fieldOfExpertise}</p>
                  <p><b>City: </b>{data.city}</p>
                  <p><b>Experience: </b>{data.experienceYears}</p>
                  <p><b>Hospital: </b>{data.hospital}</p><br />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledResults>
  )
}

const StyledResults = styled.section`
  position: relative;
  width: 100%;
  padding-top: 110px;
  background-color: ${({theme}) => theme.colors.bg2.secondary};
  color: white;

  .data-container{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .data-header{
      font-size: calc(1.1rem + 28 * (100vw - 320px) / 1600);
      font-weight: 700;
      text-align: center;
    }

    .doctors-info{
      width: 90%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      .doctor-card{
        height: 20em;
        width: 20em;
        margin: 1.3em;
        padding: 15px;
        box-shadow: 0 0 10px rgba(144, 144, 171, 0.7);
      }
    }
  }
`;

// callback function get state from store
function mapStateToProps(state: any){
  return state;
}

const ConnectedDoctorResultsComponent = connect(mapStateToProps)(DoctorResults);

export default ConnectedDoctorResultsComponent;