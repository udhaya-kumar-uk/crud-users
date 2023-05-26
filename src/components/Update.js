import React,{useEffect, useState} from "react";
import{Button,Checkbox,Form} from 'semantic-ui-react'
import '../App.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Update () { 
    const[id,setid]=useState(null)

    const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    const [check,setcheck]=useState(false)
    const [email,setemail]=useState('')
    const navigate=useNavigate()

    useEffect(()=>{
        setid(localStorage.getItem('ID'))
        setfirstname(localStorage.getItem('First Name'))
        setlastname(localStorage.getItem('Last Name'))
        setcheck(localStorage.getItem('check value'))
        setemail(localStorage.getItem('email'))
    },[])
    
    const updatedata=(()=>{
            const success=axios.put(`https://645b5379a8f9e4d6e76554ef.mockapi.io/users-crud/${id}`,{
            firstname,
            lastname,
            check,
            email 
      })
       
      if(success){
        navigate('/Read')
      }
    })

    return(
    <Form className="create-form">
    <Form.Field>
      <label>User Name</label>
      <input placeholder='User Name' value={firstname} onChange={(e)=>setfirstname(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>User Id</label>
      <input placeholder='user@18'   value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' checked={check}  onChange={()=>setcheck(!check)} />
    </Form.Field>
     <Form.Field>
     <label>User Email</label>
     <input placeholder='Email' value={email} type="email" onChange={(e)=>setemail(e.target.value)} />
   </Form.Field>
   
    <Button type='submit' onClick={updatedata} >Update</Button>

    <div className='button'>
      
      
     
       </div>
  </Form>
)
}
