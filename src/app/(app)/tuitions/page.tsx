'use client'
import TuitionCard from '@/components/TuitionCard';
import TuitionSearchForm from '@/components/TuitionSeachFrom';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

        

function TuitionPage() {
  const [isTuitionLoading,setIsTuitionLoading]=useState(false)
  const [tuitions,setTuitions]=useState([])
  const [isSearhcing,setIsSearching]=useState(false)
  useEffect(()=>{
   const fetchTuitions=async ()=>{
    try {
      setIsTuitionLoading(true)
      const res=await axios.get('/api/tuition/get')
      setTuitions(res.data.tuitions)
    } catch (error) {
      console.log(error);
      
    }finally{
      setIsTuitionLoading(false)
    }
   }
   fetchTuitions()
  },[])
  const handleSearch=async (filters)=>{
    try {
      setIsSearching(true)
      const query = new URLSearchParams(filters).toString();
      console.log(query);
      
          const res=await axios.get(`/api/tuition/search?${query}`)
          console.log(res.data);
          setTuitions(res.data.tuitions)
    } catch (error) {
      console.log(error);
      
    }finally{
      setIsSearching(false)
    }
  }
  return (
    <div className="">
      {
        isTuitionLoading ? <div className="flex flex-row min-h-screen justify-center items-center">
        <span className="loading loading-lg"></span>
      </div>: <div className="">
        <TuitionSearchForm
        isSearhcing={isSearhcing}
         onSearch={handleSearch}
        />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {tuitions.map(tuition => (
        <TuitionCard key={tuition.id} tuition={tuition} single={false} />
      ))}
          </div>
      </div>
      }
         
      
    </div>
  
  )
}

export default TuitionPage