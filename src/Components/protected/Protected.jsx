import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector} from "react-redux"
export const Protected = (props) => {
    const navigate = useNavigate()
    const {Component} = props;
    const {User_id} = useSelector(state => state.tinyclodeatil);
    useEffect(() => {
      if(User_id != ""){
        navigate("/")
      }
    }, [])
    
  return (
   <>
      <Component/>
   </>
  )
}

export const UnRProtected = (props) => {
  const navigate = useNavigate()
  const {Component} = props;
  const {User_id} = useSelector(state => state.tinyclodeatil);
  useEffect(() => {
    if(User_id == ""){
      navigate("/login")
    }
  }, [])
  
return (
 <>
    <Component/>
 </>
)
}