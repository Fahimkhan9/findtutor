'use client'
import TuitionCard from '@/components/TuitionCard';
import TuitionSearchForm from '@/components/TuitionSeachFrom';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

        

function TuitionPage() {
  const [isTuitionLoading,setIsTuitionLoading]=useState(false)
  const [tuitions,setTuitions]=useState([])
  const [isSearhcing,setIsSearching]=useState(false)
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // useEffect(()=>{
  //  const fetchTuitions=async ()=>{
  //   try {
  //     setIsTuitionLoading(true)
  //     const res=await axios.get(`/api/tuition/get`)
  //     console.log(res.data);
      
  //     setTuitions(res.data.tuitions)
  //   } catch (error) {
  //     console.log(error);
      
  //   }finally{
  //     setIsTuitionLoading(false)
  //   }
  //  }
  //  fetchTuitions()
  // },[])
  const handleSearch=async (filters)=>{
    try {
      setIsSearching(true)
      const query = new URLSearchParams(filters).toString();
   
      
          const res=await axios.get(`/api/tuition/search?${query}`)
          
          setTuitions(res.data.tuitions)
    } catch (error) {
      console.log(error);
      
    }finally{
      setIsSearching(false)
    }
  }
  const fetchTuitions = async (pageNum: number) => {
      try {
        setIsTuitionLoading(true)
        const res=await axios.get(`/api/tuition/get?page=${pageNum}&limit=10`)
        setTuitions(res.data.tuitions);
        setTotalPages(res.data.totalPages);
        setPage(res.data.page);
      } catch (error) {
        console.log(error);
        
      }finally{
        setIsTuitionLoading(false)
      }
  };

  useEffect(() => {
    fetchTuitions(page);
  }, [page]);
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
      {
        isSearhcing ? <span className="loading loading-lg"></span>:<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {tuitions?.map(tuition => (
      <TuitionCard key={tuition?.id} tuition={tuition} single={false} />
    ))}
        </div>
      }
          {/* Pagination */}
      <div className="join flex justify-center mt-6">
        <button
          className="join-item btn"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`join-item btn ${page === i + 1 ? 'btn-active' : ''}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="join-item btn"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      </div>
      }
         
      
    </div>
  
  )
}

export default TuitionPage