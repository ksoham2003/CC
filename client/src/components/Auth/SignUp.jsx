import "./Auth.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import CodingLogo from "../../assets/Logo.png";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Signup(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(){
        console.log(name, email, password, confirmPassword);
        if(name==="" || email==="" || password==="" || confirmPassword===""){
            alert("Please Fill All the Details");
        }
        else if(password!==confirmPassword){
            alert("Password and Confirm Password must be same");
        }
        else{
            await axios.post(process.env.REACT_APP_BASE_URL+"/auth/register", {name, email, password, confirmPassword}).then((res)=>{
                alert(res?.data?.message)
                navigate('/login');
            }).catch((error)=>{
                alert(error?.response?.data?.message)
            })
        }
    }

    return(
        <div className="login-main-div">
            <div className="login-form">
                <div className="auth-heading">Create Account</div>
                <div>
                    <div className="auth-box">
                        <FaRegUser className="auth-icon"/>
                        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full Name" className="auth-inp"/>
                    </div>
                    <div className="auth-box">
                        <MdOutlineEmail className="auth-icon"/>
                        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" className="auth-inp"/>
                    </div>
                    <div className="auth-box">
                        <RiLockPasswordLine className="auth-icon"/>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="auth-inp"/>
                    </div>
                    <div className="auth-box">
                        <RiLockPasswordLine className="auth-icon"/>
                        <input onClick={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" className="auth-inp"/>
                    </div>
                    <div className="auth-btn-box">
                        <span onClick={handleSubmit} className="auth-btn">Sign Up</span>
                    </div>
                </div>
            </div>
            <div>
                <img className="coding-logo" src={CodingLogo} alt="" />
            </div>
        </div>
    )
}
export default Signup;