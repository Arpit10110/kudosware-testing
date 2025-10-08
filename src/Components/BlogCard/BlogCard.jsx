import React from 'react'
import defaultImageBlog from "../../assets/defaultImageBlog.png"
import "./BlogCard.css"
const BlogCard = ({title,desc,date}) => {
  return (
    <>
        <div className="blogcard">
            <img src={defaultImageBlog} alt="BlogImg" />
            <h2>{title}</h2>
            <p>{desc}</p>
            <h4>{date}</h4>
        </div>
    </>
  )
}

export default BlogCard
