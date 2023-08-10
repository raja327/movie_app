 import React, { useEffect } from 'react'
import { useState } from 'react'
import { Card } from '../components/Card'

 export const useFetch = (apiPath,queryTerm) => {
   const [data,setData]=useState([])
  //  console.log(queryTerm)
   const url=`https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}&query=${queryTerm}`
   useEffect(() => {
    const fetchDataFromApi = async () => {
      const resdata = await fetch(url);
      const json = await resdata.json();
      setData(json.results);
    };
    fetchDataFromApi();
    // console.log(movies)
  },[url]);
  
  return {data}
}

