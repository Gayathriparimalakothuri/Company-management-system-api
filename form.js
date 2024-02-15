import axios from 'axios'
import React, {useState } from 'react'
 const Cmpyform=()=>{
    
    const size ={
        marginLeft:'200px',
        marginTop:'50px',
        width : '800px',
        height : '1000px',
        backgroundColor:'lightgreen',
        paddingLeft:'80px'
        
    }
    const header={
        color:'green',
        paddingTop:'50px',
        paddingLeft:' 95px'
    }
    const cellsize ={
        marginLeft: '30px',
        marginTop:'50px',
        marginRight:'55px',
        height:'30px',
        width:'250px',
        fontSize:'15px',
        borderRadius :'10px',
        borderColor :'green',
    }
    const submit={
        width:'100px',
        height:'35px',
        margin:'40px',
        marginLeft:'270px',
        fontSize:'20px',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'20px',
        backgroundColor:'green',
        color:'white',
        borderColor:'lightgreen'

    }
    const [data,setData]=useState(
        {
            organization: '',
            domainurl: '',
            contactname: '',
            email: '',
            phone: '',
            companytype: '',
            country: '',
            location: '',
            currency: '',
            noofemp: '',
            industrytype: '',
            Standard: ''
        }) 
        const {organization,domainurl,contactname,email,phone,companytype,country,location,currency,noofemp,industrytype,Standard} = data;
        const changeHandler = e =>{
            setData({...data,[e.target.name]:e.target.value})
        }

        const submitHandler = async(e)=>{
            e.preventDefault()
            if(organization.length<=0){
                alert(" Enter Company Name");
            } 
            else if(domainurl.length<=0){
                alert("Enter domain url");
            } 
            else if(phone.length <= 12){
                alert("Enter valid phone no with country code");
            }  
            else if(email.length <= 8){
                alert("Email should have min of 8 characters");
            }  
            else if(contactname.length<=0){
                alert("Enter Contact Name");
            }  
            else{
                console.log(data);
                alert("Your response has been recorded")
            }
        }
    const Submit=()=>{
             axios.post('http://localhost:3584/companies/postdata',{organization,domainurl,email,phone}).then((data)=>{
                console.log(data)
            }).catch(err => console.log(err))
          
        }
    return(
            <div  style={size}>
                <h1 style={header}>Company Management Systems Form</h1>
                <form onSubmit ={submitHandler} >
                    <input type='text' name='organization' value={organization} onChange ={changeHandler} placeholder="organization " style={cellsize}/>
                    <input type='text' name='domainurl' value={domainurl} onChange ={changeHandler} placeholder= "domainurl"style={cellsize}/>
                    <input type='text' name='contactname' value={contactname} onChange ={changeHandler} placeholder = "contactname"style={cellsize}/>
                    <input type='text' name='phone' value={phone} onChange ={changeHandler} placeholder ="phone"style={cellsize}/>
                    <input type='text' name='email' value={email} onChange ={changeHandler} placeholder= "email" style={cellsize}/>
                    <select name="companytype" value={companytype} onChange ={changeHandler} placeholder="companytype"style={cellsize}>
                        <option value="Company Type">Company Type</option>
                        <option value="Limited Liability Company">Limited Liability Company</option>
                        <option value="Corporation">Corporation</option>
                        <option value="Sole Proprietorship">Sole Proprietorship</option>
                        <option value="Partnership">Partnership</option>
                    </select>

                    <select name="country" value={country} onChange ={changeHandler} placeholder = "country"style={cellsize}>
                        <option value="Country">Country</option>
                        <option value="Australia">Australia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Canada">Canada</option>
                        <option value="China">China</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="India">India</option>
                        <option value="Japan">Japan</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                    </select>

                    <select name="location" value={location} onChange ={changeHandler} placeholder="location"style={cellsize}>
                    <option value="Location">Location</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="California">California</option>
                        <option value="Curitiba">Curitiba</option>
                        <option value="Hamburg">Hamburg</option>
                        <option value="London">London</option>
                        <option value="Paris">Paris</option>
                        <option value="Riyadh">Riyadh</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Shenzhen">Shenzhen</option>
                        <option value="Sydney">Sydney</option>
                        <option value="Tokyo">Tokyo</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Zurich">Zurich</option>
                    </select>

                    <select name="currency" value={currency} onChange ={changeHandler} placeholder="currency"style={cellsize}>
                    <option value="Currency">Currency</option>
                        <option value="Australian dollar">Australian dollar</option>
                        <option value="Canadian dollar">Canadian dollar</option>
                        <option value="Chinese Yuan">Chinese Yuan</option>
                        <option value="Dollar">Dollar</option>
                        <option value="Euro">Euro</option>
                        <option value="Euro">Euro</option>
                        <option value="INR">INR</option>
                        <option value="Pound ">Pound</option>
                        <option value="Real">Real</option>
                        <option value="Riyal">Riyal</option>
                        <option value="Singapore dollar">Singapore dollar</option>
                        <option value="Swiss Franc">Swiss Franc</option>
                        <option value="Yen">Yen</option>
                    </select>
                    <input type='text' name='noofemp' value={noofemp} onChange ={changeHandler} placeholder="noofemp"style={cellsize}/>
                    <select name="industrytype" value ={industrytype}onChange ={changeHandler} placeholder ="industrytype"style={cellsize}>
                        <option value="Industry Type">Industry Type</option>
                        <option value="Banking">Banking</option>
                        <option value="Biotechnology">Biotechnology</option>
                        <option value="Chemical">Chemical</option>
                        <option value="Edutech">Edutech</option>
                        <option value="Eletronics">Eletronics</option>
                        <option value="Finance">Finance</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Infrastructure">Infrastructure</option>
                        <option value="IT">IT</option>
                        <option value="Manufacture">Manufacture</option>
                        <option value="Pharmaceuticals">Pharmaceuticals</option>
                        <option value="Telecom">Telecom</option>
                    </select>
                    <select name="Standard"  value ={Standard}onChange ={changeHandler} placeholder="standard"style={cellsize}>
                        <option value="Standard">Standard</option>
                        <option value="NACE">NACE</option>
                        <option value="SIC">SIC</option>
                        <option value="NAICS">NAICS</option>
                    </select><br/>
                    <button type = 'Submit' style={submit} onClick={Submit}>Submit</button>
                </form>
            </div>
        )

 }
    
 export default Cmpyform   
