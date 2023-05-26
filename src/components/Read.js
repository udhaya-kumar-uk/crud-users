
import axios from 'axios'
import React,{useEffect,useState} from 'react'
import {   Table } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { Button } from "semantic-ui-react";




export default function Read(){
    const setData=(data)=>{
        let{id,firstname,lastname,check,email}=data
        localStorage.setItem('ID',id);
        localStorage.setItem('FirstName',firstname);
        localStorage.setItem('LastName',lastname);
        localStorage.setItem('CheckBox Value',check)
        localStorage.setItem('Email',email)
      
    }
    const [data,setdata]=useState([])
useEffect(()=>{
axios.get(`https://645b5379a8f9e4d6e76554ef.mockapi.io/users-crud`)
.then((responce)=>{
    setdata(responce.data)
})
},[])
const ondelete=((id)=>{
    axios.delete(`https://645b5379a8f9e4d6e76554ef.mockapi.io/users-crud/${id}`)
    .then(()=>{
        getdata()
    })
})

const getdata=()=>{
    axios.get(`https://645b5379a8f9e4d6e76554ef.mockapi.io/users-crud`)
.then((getdata)=>{
    setdata(getdata.data)
})
}
    return(
        <div>
            <Table compact celled definition>
    <Table.Header>
      <Table.Row>
        
        <Table.HeaderCell>User Name</Table.HeaderCell>
        <Table.HeaderCell>User Id</Table.HeaderCell>
        <Table.HeaderCell>checked</Table.HeaderCell>
        <Table.HeaderCell>Email Id</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     {data.map((data)=>{
        return( <Table.Row>
       
            <Table.Cell>{data.firstname}</Table.Cell>
            <Table.Cell>{data.lastname}</Table.Cell>
            <Table.Cell>{data.check?'Checked' : 'Unchecked'}</Table.Cell>
            <Table.Cell>{data.email}</Table.Cell>
            <Link to='/Update'>
            <Table.Cell>
            <Button onClick={()=>setData(data)} >Update</Button>
           </Table.Cell>
            </Link>
            <Table.Cell>
            <Button onClick={()=>ondelete(data.id)} >Delete</Button>
           </Table.Cell>
           
          </Table.Row>)
     })}
     </Table.Body>
    </Table>
        </div>
    )
}