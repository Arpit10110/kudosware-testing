import React from 'react'
import "./PAddressBox.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
const PAddressBox = () => {
  const dummyaddress =[
    {
      addresss:"Gola bazar khalilabad, infront of v bazar, Gautam Buddha Nagar, Uttar Pradesh, 201310, India"
    },
    {
      addresss:"knowledge park 3 near IImt college Greater Noida, near iimt, Ghaziabad, Uttar Pradesh, 201009, India"
    }
  ]
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
                    dummyaddress.map((i,index)=>{
                      return(
                        <div className='shipingbox' key={index} >
                          <h1>Address-{index+1}</h1>
                          <p>{i.addresss}</p>
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
