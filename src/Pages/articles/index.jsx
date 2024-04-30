import React, { useEffect, useState } from 'react'
import { SimpleGrid, Box} from "@chakra-ui/react"
import Header from '../../Components/Header'
import BlogCard from '../../Components/BlogCard'
import Breadcrumbs from '../../Components/Breadcrumb'
import { getBlogs } from '../../Services/articles'
import {useNavigate} from "react-router-dom"
import { useFetchData } from '../../Hooks/useFetchData'
import Loading from '../Loading'
import Searchbox from '../../Components/SearchBox/searchbox'
import { useTitle } from '../../Hooks/useTitle'


function Articles() {
  const navigate = useNavigate()
  const [searchData, setSearchData] = useState()

  useTitle("Article | Blog app")


  const {data,loading} = useFetchData({
    requestFn:()=>getBlogs(),
  })


  useEffect(()=>{

    setSearchData(data);
  },[data])

  const handleSearch = (text) =>{

    if(!text.trim()){
      setSearchData(data);
      return
    }
    const filterData = searchData.filter((item)=>
    new RegExp(text, "i").test(item.title)
  );

  setSearchData(filterData)
    console.log("filterData", filterData);
  }

  return (
    <div>


      <Header />
      <Box  px={50}>
      <Breadcrumbs/>
     <Searchbox onFocus={()=>setSearchData(data)}  onSearch={handleSearch} />
      </Box>
      {loading  ? (
      <Loading />
       ):( 
      <SimpleGrid columns={{sm: 2}} p="20" spacing="10">
        {searchData
        ?.filter((item, index) => item.id > 100)
        ?.map((item)=>(
        <BlogCard key={"blog-id" + item.id} {...item} onReadMore={()=>navigate("/articles/" + item.id)} 
        />
        ))}
   
      </SimpleGrid>
      )}
    </div>
  )
}

export default Articles
