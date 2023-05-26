import React,{useState} from "react";
import{Button,Checkbox,Form} from 'semantic-ui-react'
import '../App.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

 

export default function Create () { 

  
    const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    const [check,setcheck]=useState(false)
    const [email,setemail]=useState('')
    const navigate=useNavigate()
    const submit=()=>{
    
             const success= axios.post(`https://645b5379a8f9e4d6e76554ef.mockapi.io/users-crud`,{
             firstname,
             lastname,
             check,
             email 
       })

     
       if(success){
         navigate('/Read')
       }
    }

    return(
    <Form className="create-form">
      <h2 className='header-container'>
        Create User
     </h2>
    <Form.Field>
      <label className="para-text">User Name</label>
      <input placeholder='User Name' value={firstname} onChange={(e)=>setfirstname(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label className="para-text">User Id</label>
      <input placeholder='user@18'  value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <Checkbox className="para-text" label='I agree to the Terms and Conditions' checked={check}  onChange={(e)=>setcheck(!check)} />
    </Form.Field>
     <Form.Field>
     <label className="para-text">User Email</label>
     <input placeholder='Email' type="email" value={email}  onChange={(e)=>setemail(e.target.value)} />
   </Form.Field>
   
    <Button type='submit' onClick={submit} >Submit</Button>
    <div className='button'>
      
      
     
       </div>
     
  </Form>
)
}
