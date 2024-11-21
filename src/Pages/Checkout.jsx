import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import SignupTopBanner from "../Components/SignupTopBanner/SignupTopBanner.jsx";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox"; // Import Checkbox from Material UI
import "../Style/Checkout.css";
import Loading from "../Components/Loading/Loading";
const Checkout = () => {
  const dispatch = useDispatch();
  const { User_id } = useSelector((state) => state.tinyclodeatil || {});
  const { Cart = [] } = useSelector((state) => state.tinyclodeatil || {});
  const { TotalPrice = 0 } = useSelector((state) => state.tinyclodeatil || {});
  const { Shipping = 0 } = useSelector((state) => state.tinyclodeatil || {});
  const { Total = 0 } = useSelector((state) => state.tinyclodeatil || {});
  const shippingFee = Cart.length === 0 ? 0 : Shipping;

  const [savedAddresses, setSavedAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showNewAddress, setShowNewAddress] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0); // Track selected address index

  const [address1, setAddress1] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [userdata,setuserdata] = useState({});


  const fetchProfileData = async () => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_Port}/profile`, {
        userid: User_id,
      });
      if (data.data.addresses) {
        setSavedAddresses(data.data.addresses);
      }
      setIsLoading(false);
      setuserdata(data.data)
      dispatch({
        type:"selectedAddress",
        payload:{
          load:data.data.addresses[0],
        }
      })
      

    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
   console.log(`${import.meta.env.VITE_Port}/paymentverification`);
  }, []);

  const handlePostalCodeChange = async (e) => {
    const pincode = e.target.value;
    setPincode(pincode);

    if (pincode.length === 6) {
      try {
        const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = response.data;

        if (data[0].Status === "Success") {
          const postOffice = data[0].PostOffice[0];
          setCity(postOffice.District);
          setState(postOffice.State);
        } else {
          console.error("Invalid Postal Code");
        }
      } catch (error) {
        console.error("Error fetching postal code data:", error);
      }
    }
  };

  const handleAddAddress = async (e) => {
    e.preventDefault();

    const newAddr = {
      address1: `${address1}, ${landmark}`,
      city,
      province: state,
      zip: pincode,
      country: "India",
      default: false,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_Port}/addnewaddress`, {
        customerId: User_id,
        address: newAddr,
      });

      if (response.data.success) {
        fetchProfileData();
        setAddress1("");
        setLandmark("");
        setCity("");
        setState("");
        setPincode("");
        setShowNewAddress(false);
      } else {
        console.error("Error adding address:", response.data.message);
      }
    } catch (error) {
      console.error("Error adding address to Shopify:", error);
    }
  };

  // Handle selecting an address
  const handleSelectAddress = (index) => {
    setSelectedAddressIndex(index);
    dispatch({
      type:"selectedAddress",
      payload:{
        load: savedAddresses[index],
      }
    })
  };


  const paymentIntegration = async()=>{
    const amount = Total;
    const {data:{order}}= await axios.post(`${import.meta.env.VITE_Port}/checkout`,{
      amount
    })
    console.log(order)
    const options = {
      key: "rzp_test_zX8JwR7ErLD2Nw", 
      amount: order.amount,  
      currency: "INR",
      name: "TinyClo",
      description: "Test Transaction",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKj3Rpf78RJoBPWSyNI1UdKxTw_9zJ4lNZbJCCbYI-bYW8nZRg=s96-c-rg-br100",
      order_id: order.id, 
      callback_url:`${import.meta.env.VITE_Port}/paymentverification`,
      prefill: {
          name: userdata.first_name,
          email: userdata.email,
          contact: userdata.phone
      },
      notes: {
          address: "Razorpay Corporate Office"
      },
      theme: {
          color: "#3399cc"
      }
  };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  return (
    <>
      <Navbar />
      <SignupTopBanner name={"Checkout"} />
      <div className="checkout-main">
        <h2 className="checkout-head">
          Check<span>out</span>
        </h2>

        <div className="inner-checkout-div">
          <div className="checkout-address">
            <div className="address-btn-checkout">
              <button onClick={() => setShowNewAddress(false)}>Saved Address</button>
              <button onClick={() => setShowNewAddress(true)}>New Address</button>
            </div>

            {/* Display saved addresses */}
            {!showNewAddress ? (
              isLoading ? (
                <div className="loading-checkout">
                  <Loading/>
                </div>
              ) : (
                <div className="saved-addresses">
                  {savedAddresses.map((address, index) => (
                    <div
                      key={index}
                      className={`saved-address ${selectedAddressIndex === index ? "selected" : ""}`}
                      onClick={() => handleSelectAddress(index)}
                      style={{
                        border: selectedAddressIndex === index ? "2px solid #007bff" : "1px solid #ddd",
                      }}
                    >
                      <Checkbox
                        checked={selectedAddressIndex === index}
                        onChange={() => handleSelectAddress(index)}
                        color="primary"
                      />
                      <p>
                        {address.address1}, {address.city}, {address.province}, {address.zip}, {address.country}
                      </p>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <div className="new-address-form">
                <form className="loginbox checkout-add-address" onSubmit={handleAddAddress}>
                  <div className="login-div-input">
                    <h3>Address</h3>
                    <input
                      type="text"
                      value={address1}
                      onChange={(e) => setAddress1(e.target.value)}
                      required
                    />
                  </div>
                  <div className="signup-div-main">
                    <div className="signup-div-input">
                      <h3>Landmark</h3>
                      <input
                        type="text"
                        value={landmark}
                        onChange={(e) => setLandmark(e.target.value)}
                        required
                      />
                    </div>
                    <div className="signup-div-input">
                      <h3>Postal Code</h3>
                      <input
                        type="text"
                        value={pincode}
                        onChange={handlePostalCodeChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="signup-div-main">
                    <div className="signup-div-input">
                      <h3>City</h3>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </div>
                    <div className="signup-div-input">
                      <h3>State</h3>
                      <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="signup-div-btn">
                    <button type="submit">Add Address</button>
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="cart-bill-main">
            <div className="price-summary-main">
              <div className="price-Summary">
                <h1>Price Summary</h1>
                <h4>Includes GST and All other Taxes</h4>
                <div className="total-price-div">
                  <h2>Total Item Price</h2>
                  <h2>₹{TotalPrice}</h2>
                </div>
                <div className="total-price-div">
                  <h2>Shipping Fee</h2>
                  <h2>₹{shippingFee}</h2>
                </div>
              </div>
              <div className="price-div">
                <h1>Total</h1>
                <h1>₹{Total}</h1>
              </div>
              <Link className="pay-btn-checkout"  to="#"  onClick={paymentIntegration} >Pay ₹{Total}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
