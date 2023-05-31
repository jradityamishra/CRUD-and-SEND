import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
//import { get } from "../../../server/routes/routes";

const Home = () => {
  const [getuserdata,setUserdata]=useState([]);
console.log(getuserdata);

  const getdata=async(e)=>{
    // e.preventDefault();
    const res=await fetch("/getdata",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
        
    })
    const data=await res.json();
    console.log(data);

    if(res.status===404 ||!data){
        alert("error");
    }
    else{
      setUserdata(data);
        console.log("get added")
    }
}

useEffect(()=>
{
  getdata();
},[])

const deleteuser=async(id)=>{
  const res2=await fetch(`/deleteuser/${id}`,{
    method:"DELETE",
    headers:{
        "Content-Type":"application/json"
    },
  })
  const deletedata=await res2.json();
  console.log(deletedata);
  if(res2.status===422 || !deletedata)
{
  console.log("error");
}
else{
  console.log("user deleted");
  getdata();
}}



  return (
    <>
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2 d-flex justify-content-end mb-2">
           <NavLink to="/form"> <button className="btn btn-primary">Add data</button></NavLink>
          </div>
          <table class="table ">
            <thead>
              <tr className="table-dark">
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">hobbies</th>
                <th scope="col">Checkbox</th>
                <th scope="col"></th>

              </tr>
            </thead>
            <tbody>

    {
      getuserdata.map((ele, id)=>{
        return(
          <>
          <tr>
                <th scope="row">{id+1}</th>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.mobile}</td>
                <td>{ele.hobbies}</td>
                <td> <input type="checkbox" aria-label="Checkbox for following text input"/></td>
                <td className="d-flex justify-content-between">
                   
                  <NavLink to={`update/${ele._id}`}><button className="btn btn-primary">update</button></NavLink>
                    <button onClick={()=>deleteuser(ele._id)} className="btn btn-danger">delete</button>
                    <button  className="btn btn-success">send</button>
                </td>
              </tr>

          </>
        )
      })
    }

             
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
