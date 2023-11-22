
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Locationcurrency = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> Locationcurrency {
      <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
        <option value="£">£ Pounds</option>
        <option value="₹">₹ Rupees</option>
        <option value="€">€ Euro</option>
        <option value="USD">$ USD</option>
      </select>	
      }	
    </div>
    );
};

export default Locationcurrency;