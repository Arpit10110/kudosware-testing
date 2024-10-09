import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import SignupTopBanner from "../Components/SignupTopBanner/SignupTopBanner.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Style/Checkout.css";

const Checkout = () => {
  const { User_id } = useSelector((state) => state.tinyclodeatil || {});
  const { Cart = [] } = useSelector((state) => state.tinyclodeatil || {});
  const { TotalPrice = 0 } = useSelector((state) => state.tinyclodeatil || {});
  const { Shipping = 0 } = useSelector((state) => state.tinyclodeatil || {});
  const { Total = 0 } = useSelector((state) => state.tinyclodeatil || {});
  const shippingFee = Cart.length === 0 ? 0 : Shipping;

  const [savedAddresses, setSavedAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showNewAddress, setShowNewAddress] = useState(false);

  const [address1, setAddress1] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const fetchProfileData = async () => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_Port}/profile`, {
        userid: User_id,
      });
      if (data.data.addresses) {
        setSavedAddresses(data.data.addresses);
        console.log(savedAddresses);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handlePostalCodeChange = async (e) => {
    const pincode = e.target.value;
    setPincode(pincode);

    // Fetch city and state based on pincode
    if (pincode.length === 6) {
      try {
        const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = response.data;

        if (data[0].Status === "Success") {
          const postOffice = data[0].PostOffice[0];
          setCity(postOffice.District);  // Set the city
          setState(postOffice.State);    // Set the state
        } else {
          console.error("Invalid Postal Code");
        }
      } catch (error) {
        console.error("Error fetching postal code data:", error);
      }
    }
  };

  const handleAddAddress = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const newAddr = {
      address1,
      address2: landmark,
      city,
      province: state,
      zip: pincode,
      country: "India", // Specify country
      default: false,   // Change this if you want to set this as default
    };

    try {
      // Make a POST request to Shopify API to add the new address
      const response = await axios.post(`${import.meta.env.VITE_Port}/addnewaddress`, {
        customerId: User_id,
        address: newAddr,
      });

      if (response.data.success) {
        // Optionally, refresh the saved addresses
        fetchProfileData(); // Re-fetch addresses to include the new one
        // Clear the form fields
        setAddress1("");
        setLandmark("");
        setCity("");
        setState("");
        setPincode("");
        setShowNewAddress(false); // Hide the new address form
      } else {
        console.error("Error adding address:", response.data.message);
      }
    } catch (error) {
      console.error("Error adding address to Shopify:", error);
    }
  };

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
                  <h1>Loading...</h1>
                </div>
              ) : 
              <div className="Saved-address" >
               {

                savedAddresses.map((i,index)=>{
                    return(
                        <p key={index}>
                        {i.address1}, {i.city}, {i.province}, {i.zip}, {i.country}
                      </p>
                    )
                })

               }
              </div>
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
              <Link to="/payment">Pay ₹{Total}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
