import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {

    let navigate = useNavigate()

    const [employee, setEmployee] =useState({

        empEmailId: "",
        empPassword: ""
    });

    const { empEmailId, empPassword } = employee;

    const onInputChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {

        e.preventDefault()

       const result= await axios.get(`http://localhost:9191/employees/signin/${empEmailId}/${empPassword}`)

       if(result.data)
       {
         navigate('/welcome')
       }else{
          alert("invalid credentials please try again")
          navigate('/')
       }

        

    }

    return (
        <div className="container">
            <div className="row">
                <div className="bg-white">
                    <h1>Employee Sign In Form</h1>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            Employee EmailId <input type="email" name="empEmailId" value={empEmailId} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            Employee Password <input type="text" name="empPassword" value={empPassword} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button className="btn btn-success">Sign In</button>
                        <Link to={`/signup`} className="btn btn-info">Sign Up</Link>
                    </form>
                </div>
            </div>
        </div>
    )

}