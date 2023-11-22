import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {

           setNewBudget(event.target.value);
         
    }
    return (
<div className='alert alert-secondary'>

Budget :£
<input type="number" step="10" max="20000" style={{width:'5rem'}} value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
