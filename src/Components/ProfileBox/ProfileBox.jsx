import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useSelector,useDispatch} from "react-redux"
import "./Profilebox.css"
import {useNavigate} from "react-router-dom"
const ProfileBox = () => {
    const navigate = useNavigate();
    const dispatch  = useDispatch()
    const { User_id } = useSelector(state => state.tinyclodeatil);
    const [Userdata, setUserdata] = useState({});
    const [Address, setAddress] = useState({});
    const [isLoading,setisLoading] = useState(true);
    const Profiledata = async()=>{
        try {
            const {data}=await axios.post(`${import.meta.env.VITE_Port}/profile`,{
                userid : User_id
            })
            setUserdata(data.data);
            if (data.data.addresses && data.data.addresses.length > 0) {
                setAddress(data.data.addresses[0]);  // Assuming the first address
            }
            setisLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const Logouthandel = ()=>{
        navigate("/");
        dispatch({
          type:"logout"
        })
    }

    useEffect(() => {
        Profiledata();
    }, [])
    
  return (
    <>
        {
            isLoading ? <div className="loading"> <h1>Loading...</h1></div>:<div className="profile-box-main">
            <div className="proile-box">
            <h3>Name: {Userdata.first_name}</h3>
            <h3>Email: {Userdata.email}</h3>
            <h3>Phone no: {Userdata.phone}</h3>
            <h3>Address:{Address.address1}, {Address.city}, {Address.province}, {Address.zip}, {Address.country}</h3>
            <button onClick={Logouthandel}>Log out</button>
            </div>
        </div>
        }
    </>
  )
}

export default ProfileBox
