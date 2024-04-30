import React from 'react'
import { Box, Text,Button, Image,SimpleGrid } from "@chakra-ui/react"
import Header from '../../Components/Header'
import {useNavigate} from "react-router-dom"
import { ROUTER } from '../../Constant/router'
import { useTitle } from '../../Hooks/useTitle'

function Home() {
  useTitle("Home | Blog app")


  const navigate = useNavigate()
  return (
    <div>
        <Header />   

<SimpleGrid bg="gray.50" columns={{sm:2}} spacing="2" p="10" >

        <Box display="flex" flexDirection="column" justifyContent="flex-start" gap="16px">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
                 Welcome to Articles Devil  
        </Text>
        <Text
          bgClip="text"
          fontSize="2xl"
          fontWeight="medium"
          color="black"
        >
              Lorem ipsum dolor sit
               amet consectetur adipisicing elit. Quam dolores
                provident assumenda ex quo cupiditate voluptatum
                , facere beatae obcaecati eius? Natus facilis officia
                 exercitationem quas rerum hic culpa aspernatur esse.
        </Text>
         <Button size="lg"  alignSelf="flex-start" colorScheme='teal' onClick={()=>navigate(ROUTER.ARTICLES_CREATE)}>Get Started</Button>
        </Box>
        <Box>
          <Image  src='https://cdni.iconscout.com/illustration/premium/thumb/blog-writer-working-on-article-5691583-4759515.png'></Image>
        </Box>
        </SimpleGrid>



    </div>
  )
}

export default Home
