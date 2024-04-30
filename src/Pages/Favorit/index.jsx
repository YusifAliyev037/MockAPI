import React, {} from 'react'
import { SimpleGrid, Box} from "@chakra-ui/react"
import Header from '../../Components/Header'
import BlogCard from '../../Components/BlogCard'
import Breadcrumbs from '../../Components/Breadcrumb'
import {useNavigate} from "react-router-dom"
import { useGlobalStore } from '../../Store/global/GlobalProvider'
import { useTitle } from '../../Hooks/useTitle'


function Favorit() {
  const navigate = useNavigate()
  useTitle("Favorit | Blog app")


  const {state: {favorites}} = useGlobalStore()

  return (
    <div>


      <Header />
      <Box  px={50}>
      <Breadcrumbs routes={["Favorites"]}/>
      </Box>
     
      <SimpleGrid columns={{sm: 2}} p="20" spacing="10">
        {favorites
        ?.filter((item, index) => item.id > 100)
        ?.map((item)=>(
        <BlogCard key={"blog-id" + item.id} {...item} onReadMore={()=>navigate("/articles/" + item.id)} 
        />
        ))}
   
      </SimpleGrid>
      
    </div>
  )
}

export default Favorit
