import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const SignUp = () => {

    let navigate = useNavigate()

    const [employee, setEmployee] = useState({

        empName: "",
        empAddress: "",
        empContactNumber: "",
        empDOB: "",
        empEmailId: "",
        empPassword: ""
    });

    const { empName, empAddress, empContactNumber, empDOB, empEmailId, empPassword } = employee;

    const onInputChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {

        e.preventDefault()

        await axios.post("http://localhost:9191/employees/signUp", employee)

        navigate('/')

        // console.log(employee)

        // alert("SignUp done successfully")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="bg-white">
                    <h1>Employee Sign Up Form</h1>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            Employee Name <input type="text" name="empName" value={empName} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            Employee Address <input type="text" name="empAddress" value={empAddress} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            Employee ContactNumber <input type="number" name="empContactNumber" value={empContactNumber} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            Employee DOB <input type="date" name="empDOB" value={empDOB} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            Employee EmailId <input type="email" name="empEmailId" value={empEmailId} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            Employee Password <input type="text" name="empPassword" value={empPassword} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button className="btn btn-success">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )

}