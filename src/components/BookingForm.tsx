import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { displayDoctors } from '../redux/actions';
import { doctorData } from '../data/data';

function BookingForm(props: any) {
  const [formState, setFormState] = useState<string>('detail-1');
  const [name, setName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [complaints, setComplaints] = useState<string>('');
  const [checkPhysio, setCheckPhysio] = useState<boolean>(false);
  const navigate = useNavigate();
  // console.log(props);
  console.log(city);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const doctors = doctorData.filter((data: any) => data.city === city);
    console.log(doctors);
    props.dispatch(displayDoctors(doctors));
    navigate('/doctors');
  }

  return (
    <StyledForm id='apply'>
      <div className='custom-container'>
        <div className='form-container'>
          <div className='form-header'>
            Book an Appointment for FREE
          </div>
          <form className='booking-form'>
            { formState === 'detail-1' ? 
              <>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}  placeholder='Name' required />
                <input type='tel' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Mobile' required />
                <button onClick={() => setFormState('detail-2')}>Start your Recovery</button>
              </> : 
                  <>
                    { formState === 'detail-2' ? 
                      <>
                        <input value={age} onChange={(e) => setAge(e.target.value)}  placeholder='Age' required />
                        <input value={city} onChange={(e) => setCity(e.target.value)} placeholder='City' required />
                        <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Company' required />
                        <button onClick={() => setFormState('detail-3')}>Continue</button>
                      </> : 
                          <>
                            { formState === 'detail-3' ? 
                              <>
                                <textarea value={complaints} onChange={(e) => setComplaints(e.target.value)} placeholder='Chief complaints' />
                                <div>
                                  <input type='checkbox' checked={checkPhysio} onChange={(() => setCheckPhysio(!checkPhysio))} />
                                  <h3>Any previous experience with Physiotherapy</h3>
                                </div>
                                <button onClick={handleFormSubmit}>Submit</button>
                              </> : 
                                  <></>}
                          </> }
                  </> }
          </form>
        </div>
      </div>
    </StyledForm>
  )
}

// styled component
const StyledForm = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.bg2.secondary};

  .custom-container{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .form-container{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      box-shadow: 0 0 10px rgba(144, 144, 171, 0.7);
    }

    .form-header{
      text-align: center;
      font-size: calc(1.1rem + 28 * (100vw - 320px) / 1600);
      font-weight: 700;
      color: white;
      padding: 0 10px;
    }

    .booking-form{
      display: flex;
      flex-direction: column;
      margin: 2em;
    }

    .booking-form input{
      margin: 1em;
      width: 20em;
      height: 2em;
      padding: 8px;
      font-size: 13px;
    }

    .booking-form textarea{
      height: 5em;
      width: 30em;
      padding: 8px;
      font-size: 13px;
    }

    .booking-form div{
      color: white;
      font-size: 13px;
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }

    .booking-form div input{
      width: 4em;
    }

    .booking-form button{
      margin: 1em;
      height: 3em;
      width: 12em;
      color: white;
      background-color: #00ACC1;
      border: none;
      border-radius: 5px;
      &:hover{
        cursor: pointer;
      }
    }
  }
`;

// callback function get state from store
function mapStateToProps(state: any){
  return state;
}

const connectedBookingFormComponent = connect(mapStateToProps)(BookingForm);

export default connectedBookingFormComponent;