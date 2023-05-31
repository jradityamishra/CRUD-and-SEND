import React, { useState,useEffect } from 'react'
import { NavLink,useParams,useNavigate } from 'react-router-dom'

const Update = () => {

    const navigate = useNavigate();
    const[inputv,setInp]=useState({
        name:'',
        email:'',
        mobile:'',
        hobbies:'',
    })

    //const { name,email,mobile, hobbies}=inputv;

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

    const { id } = useParams("");
    console.log(id);
  
    const getdata=async(e)=>{
        // e.preventDefault();
        const res=await fetch(`/getuser/${id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
            
        })
        const data=await res.json();
        console.log(data);
    
        if(res.status=== 422 ||!data){
            alert("error hai");
        }
        else{
          setInp(data);
            console.log("get added")
        }
    }
    
    useEffect(()=>
    {
      getdata();
    },[])

    const updateuser=async (e)=>{
        e.preventDefault();
        const {name,email,mobile,hobbies}=inputv;
        const res= await fetch(`/updateuser/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,mobile,hobbies
            })
            
        });

        const data2=await res.json();
        console.log(data2);
        
        if(res.status=== 422 ||!data2){
            alert("fill data");
        }else{
            alert("updated");
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
                   
                   

                    <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
 
    </>
  )
}

export default Update