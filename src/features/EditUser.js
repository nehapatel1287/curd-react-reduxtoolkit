import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import TextField from '../components/TextField'
import { editUser } from './Users/userSlice'

const EditUser = () => {
    const param = useParams();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const users =useSelector(store => store.users);
    const existingUser = users.filter(user =>user.id===param.id);
    console.log(existingUser[0]);
    const {name,email}=existingUser;
    const[values,setValues]=useState({
        name,email
    })
    console.log(values);

    const handleEditUser=()=>{
        setValues({name:'',email:''});
        dispatch(editUser({
          id:param.id,
          name:values.name,
          email:values.email

        }))
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

    <Button onClick={handleEditUser}>Submit</Button>
    
    </div>
  )
}


export default EditUser