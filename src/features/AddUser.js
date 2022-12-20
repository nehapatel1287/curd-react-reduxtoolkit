import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import TextField from '../components/TextField'

const AddUser = () => {
    
    const navigate=useNavigate();
    const[values,setValues]=useState({
        name:'',
        email:''
    })

    const handleAddUser=()=>{
        setValues({name:'',email:''});
        navigate('/');
    }

  return (
    <div className='mt-10 max-w-xl mx-auto'>
    <TextField
    label="Name"
    onChange={(e)=>setValues({...values,name:e.target.value})}
    inputProps={{type :'text',placeholder:'jhon'}}
    />
    <TextField
    label="Email"
    onChange={(e)=>setValues({...values,email:e.target.value})}
    inputProps={{type:'email',placeholder:'jhone@mail.com'}}
    />

    <Button onClick={handleAddUser}>Submit</Button>
    
    </div>
  )
}

export default AddUser