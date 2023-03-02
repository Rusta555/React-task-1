import React from 'react'
import TextField from '@mui/material/TextField';

const Form = () => {
  return (
    <div className='form'>

        <div className="form-group">

        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Surname" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />

        </div>

    </div>
  );
};

export default Form