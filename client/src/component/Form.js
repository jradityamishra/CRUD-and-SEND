import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate();
    const[inputv,setInp]=useState({
        name:'',
        email:'',
        mobile:'',
        hobbies:'',
    })

    const { name,email,mobile, hobbies}=inputv;
    const setdata=(e)=>{
        console.log(e.target.value);
         const {name,value}=e.target;
         setInp((p)=>{
            return{
                ...p,
                [name]:value
            }
         })
    }
  
    const addinp=async(e)=>{
        e.preventDefault();
        const res=await fetch("/form",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,mobile, hobbies
            })
        })
        const data=await res.json();
        console.log(data);

        if(res.status===404 ||!data){
            alert("error");
        }
        else{
            alert("data added")
            navigate("/");
        }
    }
   


  return (
    <>
   <div className="container">
            <NavLink to="/">home</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" value={inputv.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">email</label>
                        <input type="email"  value={inputv.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
                    </div>
                  
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="number" value={inputv.mobile} onChange={setdata} name="mobile" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Hobbies</label>
                        <input type="text" value={inputv.hobbies}  onChange={setdata} name="hobbies" class="form-control" id="exampleInputPassword1" />
                    </div>
                   
                   

                    <button type="submit" onClick={addinp}  class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
 
    </>
  )
}

export default Form