import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StoreCard from '../Components/StoreCard/StoreCard';
import Loading from '../Components/Loading/Loading.jsx';
const GirlsStore = () => {
  const [AllstoreData, SetAllstoreData] = useState([]);
  const [IsLoading ,SetIsLoading] = useState(true);
  const getallstore = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_Port}/getgirls`);
      const allstoredata = data.data;
      SetAllstoreData(allstoredata); 
      SetIsLoading(false);
      console.log(allstoredata)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallstore();
  }, []);
  useEffect(() => {
    console.log('Updated AllstoreData:', AllstoreData);
  }, [AllstoreData]);

  return (
    <>
      {
        IsLoading == true ?<Loading/>:<div className='AllStore-main-din' >
          {
            AllstoreData.map((i,index)=>{
              return(
                <StoreCard key={index} id={i.id} image={i.image.src} title={i.title} price={i.variants[0].price}  />
              )
            })
          }
        </div>
      }
    </>
  );
}

export default GirlsStore
