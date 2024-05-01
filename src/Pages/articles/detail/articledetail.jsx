import React from 'react'
import Header from '../../../Components/Header'
import { Box, Text,Image,SimpleGrid,Button } from "@chakra-ui/react"
import {useParams} from "react-router-dom"
import { useFetchData } from '../../../Hooks/useFetchData'
import { getBlogId } from '../../../Services/articles'
import Loading from '../../Loading'
import { converTime } from '../../../Utils/convertTime'
import {AddIcon,MinusIcon} from "@chakra-ui/icons"
import { useGlobalStore } from '../../../Store/global/GlobalProvider'
import { TYPES } from '../../../Store/global/type'
import Breadcrumbs from '../../../Components/Breadcrumb'
import { useTitle } from '../../../Hooks/useTitle'
import { useQuery } from 'react-query'

 function Articledetail() {

  const {id} = useParams()

  const {data,isFetching} = useQuery({
    // queryKey:["blogs",id],
    queryKey:["blog_detail"],
    requestFn:()=>getBlogId(id),
    refetchInterval:false, 
    refetchOnWindowFocus:false,
    refetchOnReconnect:true 
  })
  const articleItem =data?.data
  useTitle(`${articleItem?.title} | Blog app`)


  const {state, dispatch} = useGlobalStore()
  console.log(state.favorites);


  
  // const {data,loading} = useFetchData({
  //   requestFn:()=>getBlogId(id),
  //   dependecy:[id]
  // })


  const isFav = state.favorites.find((item)=> item.id == id);
  // console.log(isFav);
  const handleToggleFav = ()=>{
    if(isFav){
      const filtevFav = state.favorites.filter((item)=> item ===  id)
      dispatch({type:TYPES.TOGGLE_FAV, payload:filtevFav})
      return
    }
    
    dispatch({type:TYPES.TOGGLE_FAV, payload:[...state.favorites, data]})

  }

  return (
    <>
      <Header />
      <Breadcrumbs routes={["Articles", articleItem?.title]}/>
      {isFetching ? (<Loading />): (

      <SimpleGrid bg="gray.50" columns={{sm:2}} spacing="2" p="10" >
      <Box>
          <Image  src={articleItem?.cover_url} alt={articleItem?.title}></Image>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="flex-start" gap="16px">
        <Text
          bgClip="text"
          fontSize="md"
          fontWeight="medium"
          color="gray"
        >
             {converTime(+articleItem?.created)}
        </Text>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
        >
                {articleItem?.title} 
        </Text>
        <Text
          bgClip="text"
          fontSize="lg"
          fontWeight="medium"
          color="gray"
        >
              {articleItem?.desc}
        </Text>
       <Button 
          onClick={handleToggleFav}
          alignSelf="flex-start" 
          leftIcon={isFav ? <MinusIcon/> : <AddIcon/>} 
          colorScheme={isFav ? "red" : "green"}>{isFav ? "Remove" : "Add"}Favorite</Button>
        </Box>
        </SimpleGrid>
      )}

    </>
  )
}


export default Articledetail
