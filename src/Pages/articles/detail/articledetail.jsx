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

 function Articledetail() {

  const {id} = useParams()

  useTitle(`Detail | Blog app`)


  const {state, dispatch} = useGlobalStore()
  console.log(state.favorites);
  
  const {data,loading} = useFetchData({
    requestFn:()=>getBlogId(id),
    dependecy:[id]
  })

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
      <Breadcrumbs routes={["Articles", data?.title]}/>
      {loading ? (<Loading />): (

      <SimpleGrid bg="gray.50" columns={{sm:2}} spacing="2" p="10" >
      <Box>
          <Image  src={data?.cover_url} alt={data?.title}></Image>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="flex-start" gap="16px">
        <Text
          bgClip="text"
          fontSize="md"
          fontWeight="medium"
          color="gray"
        >
             {converTime(+data?.created)}
        </Text>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
        >
                {data?.title} 
        </Text>
        <Text
          bgClip="text"
          fontSize="lg"
          fontWeight="medium"
          color="gray"
        >
              {data?.desc}
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
