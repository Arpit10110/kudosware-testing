import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useSelector,useDispatch} from "react-redux"
import "./Profilebox.css"
import {useNavigate} from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit';
const ProfileBox = () => {
    const navigate = useNavigate();
    const dispatch  = useDispatch()
    const { User_id } = useSelector(state => state.tinyclodeatil);
    const [Userdata, setUserdata] = useState({});
    const [isLoading,setisLoading] = useState(true);
    const Profiledata = async()=>{
        try {
            const {data}=await axios.post(`${import.meta.env.VITE_Port}/profile`,{
                userid : User_id
            })
            setUserdata(data.data);
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
        <div className="profilebox-main">
            <div className="profilebox-header">
                <h1>Personal <span>Information</span></h1>
                <div className='editprofile-div' >
                <EditIcon className='editprofile-icon' />
                <button>Update Password</button>
                </div>
            </div>
            {
                isLoading === true ? <div className="profilebox-loading">
                    <h1>Loading...</h1>
                 </div>:
            <div className="profilebox-deatils">
                <div className="profilebox-cont">
                <h1>Name surname</h1>
                <h2>{Userdata.first_name}</h2>
                </div>
                <div className="profilebox-cont">
                <h1>Email ID</h1>
                <h2>{Userdata.email}</h2>
                </div>
                <div className="profilebox-cont">
                <h1>Phone Number</h1>
                <h2>{Userdata.phone}</h2>
                </div>
                <div className="profilebox-cont">
                <button onClick={Logouthandel} >Logout</button>
                </div>
            </div>
            }
        </div>
    </>
  )
}

export default ProfileBox
