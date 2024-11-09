import React, { useState,useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import BlogCard from "../Components/BlogCard/BlogCard.jsx";
import SignupTopBanner from "../Components/SignupTopBanner/SignupTopBanner.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Style/Blogs.css";
import Dialog from '@mui/material/Dialog';
import axios from "axios";
import Loading from "../Components/Loading/Loading";

const Blogs = () => {
  const { User_id } = useSelector((state) => state.tinyclodeatil);
  const [open, setOpen] = useState(false);
  const [Title, SetTitle] = useState("");
  const [Dsc, SetDsc] = useState("");
  const [AllBogs, SetAllBogs] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};
  // Function to format date as '22th July, 2023'
  const getFormattedDate = () => {
    const date = new Date();
    const day = date.getDate();
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    // Function to add suffix like 'st', 'nd', 'rd', 'th' to day
    const getDayWithSuffix = (day) => {
      if (day > 3 && day < 21) return `${day}th`;
      switch (day % 10) {
        case 1: return `${day}st`;
        case 2: return `${day}nd`;
        case 3: return `${day}rd`;
        default: return `${day}th`;
      }
    };

    return `${getDayWithSuffix(day)} ${month}, ${year}`;
  };

  const submitBlog = async (e) => {
    e.preventDefault();
    const creationDate = getFormattedDate();
    try {
      const data = await axios.post(`${import.meta.env.VITE_Port}/createblog`, {
        title: Title,
        desc: Dsc,
        date: creationDate 
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    
    SetDsc("");
    SetTitle("");
    handleClose();
  };
  const getblogs = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_Port}/fetchBlog`);
      const Blogs = data.blogs;
  
      // Sorting blogs by date (newest first)
      const sortedBlogs = Blogs.sort((a, b) => {
        const dateA = new Date(a.date.replace(/(\d+)(th|st|nd|rd)/, '$1')); // Parse '18th October, 2024' into '18 October, 2024'
        const dateB = new Date(b.date.replace(/(\d+)(th|st|nd|rd)/, '$1')); // Parse '17th October, 2024' into '17 October, 2024'
        return dateB - dateA; // Sort newest first
      });
  
      SetAllBogs(sortedBlogs);
      SetIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getblogs();
  }, [])
  
  return (
    <>
      <Navbar />
      <SignupTopBanner name={"Blogs"} />
      <div className="blog-main">
        <div className="create-blogDiv">
          {User_id === "" ? (
            <Link to="/login">Login to Create Blogs</Link>
          ) : (
            <button onClick={handleClickOpen}>Create Blogs</button>
          )}
        </div>
        <Dialog fullWidth open={open} onClose={handleClose}>
          <form onSubmit={submitBlog} className="CreateBlog-form">
            <h2>Title</h2>
            <input
              value={Title}
              onChange={(e) => SetTitle(e.target.value)}
              type="text"
              required
            />
            <h2>Description</h2>
            <textarea
              value={Dsc}
              onChange={(e) => SetDsc(e.target.value)}
              required
            ></textarea>
            <div className="blog-form-btns">
              <button type="submit">Submit</button>
              <button onClick={handleClose}>Cancel</button>
            </div>
          </form>
        </Dialog>
        {
          isLoading == true ?<Loading/>:
        <div className="allbogs">
          {
            AllBogs.map((i,index)=>{
              return(
                <BlogCard key={index} title={i.title} date={i.date} desc={i.desc}  />
              )
            })
          }
        </div>
        }
      </div>
        <Footer/>
    </>
  );
};

export default Blogs;
