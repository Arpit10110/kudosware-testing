import React,{useEffect, useState} from 'react'
import "./PAddressBox.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSelector } from 'react-redux';
import axios from 'axios';
const PAddressBox = () => {
  const { User_id } = useSelector((state) => state.tinyclodeatil || {});
  const [savedAddresses, setSavedAddresses] = useState([]);
  const getaddress = async()=>{
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_Port}/profile`, {
        userid: User_id,
      });
      setSavedAddresses(data.data.addresses);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getaddress()
  }, [])
  

  return (
    <>
          <div className="profilebox-main">
            <div className="profilebox-header">
                <h1>Shipping <span>Address</span></h1>
                <div className='editprofile-div' >
                <AddCircleIcon className='add-icon' />
                </div>
            </div>
            <div className="shiipping-deatils">
                  {
                    savedAddresses.map((i,index)=>{
                      return(
                        <div className='shipingbox' key={index} >
                          <h1>Address-{index+1}</h1>
                          <p>{i.address1}, {i.city}, {i.province}, {i.zip}, {i.country}</p>
                        </div>
                      )
                    })
                  }
            </div>
        </div>
    </>
  )
}

export default PAddressBox
