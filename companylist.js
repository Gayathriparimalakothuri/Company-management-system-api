import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3584/companies/').then((companies)=>{
        setCompanies(companies.data)
        console.log(companies.data)
    }).catch( err => console.log(err))
  },[])
const header={
 margin:'40px',
 marginLeft:'490px'
}
  const gridstyle={
    padding:'50px',
    fontSize:'20px',
    size: '25%',
    width:'40px'
  }
  const divstyle={
    margin:'60px',
    width:'90%',
    padding:'20px',
    backgroundColor:'lightblue'
  }
  const spanstyle={
    paddingLeft:'70px',
    fontSize:'30px',
    marginBottom:'0px',
    size:'25px',
    marginLeft:'80px'
  }
  const phonestyle={
    padding:'60px',
    fontSize:'30px',
    paddingRight:'10px'
  }
  return (<div>
    <h1 style={header}>Company list</h1>
    <span style={spanstyle}>organization</span><span style={spanstyle}>domainurl</span><span style={spanstyle}>email</span><span style={phonestyle}>phone</span>
    <div>
    {
       companies.map(entry =>{
           return <div style={divstyle} > 
             <span style={gridstyle}>{entry.organization}</span><span style={gridstyle}>{entry.domainurl}</span><span style={gridstyle}>{entry.email}</span><span style={gridstyle}>{entry.phone}</span>
           </div>

       })
    }
     
   </div>
   </div>
    
  );
};

export default CompanyList;