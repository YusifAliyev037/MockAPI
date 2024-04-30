import React from 'react'
import {Box,Stack,Button,Text, Badge,ButtonGroup} from '@chakra-ui/react'
import {useNavigate,useLocation} from "react-router-dom"
import { ROUTER } from '../Constant/router'
import { useGlobalStore } from '../Store/global/GlobalProvider'
 function Header() {

    const navigate = useNavigate()

    const {state} = useGlobalStore()

    const {pathname} = useLocation()

    const isActive = (p) => (pathname == p ? "orange" : "white")

    const favCount = state.favorites?.length

  return (
    <Box 
    height="100px" 
    p="12px" 
    alignItems="center"
    display="flex" 
    justifyContent={'space-between'} 
    backgroundColor="teal">
        <Text as="h1" fontSize="4xl" color="white">
            Blog
        </Text>
        

        <Stack direction='row' spacing={4} align='center' as='ul'>
  <Button  variant='ghost' color={isActive(ROUTER.HOME)} onClick={()=>navigate(ROUTER.HOME)}>
    Home
  </Button>
  <Button as='li'  variant='ghost' color={isActive(ROUTER.ARTICLES)} onClick={()=>navigate(ROUTER.ARTICLES)}>
    Article
  </Button>
  <Button as='li' variant='ghost' color={isActive(ROUTER.ABOUT)} onClick={()=>navigate(ROUTER.ABOUT)}>
    About
  </Button>
  {!!favCount && <Button as='li' variant='ghost'color={isActive(ROUTER.FAVORIT)} onClick={()=>navigate(ROUTER.FAVORIT)}>
    Favorit
    <Badge variant="solid" colorScheme='red'>{favCount}</Badge>
  </Button>} 
  <Button as='li' variant='ghost' color={isActive(ROUTER.FAQ)} onClick={()=>navigate(ROUTER.FAQ)}>
    FAQ
  </Button>
  </Stack> 
  <ButtonGroup>

  <Button
  onClick={()=>navigate(ROUTER.ARTICLES_CREATE)}
  as="button"
  >
    Create 
  </Button> 
  <Button
  onClick={()=>navigate(ROUTER.SETTING)}
  as="button"
  >
    Setting
  </Button>
  </ButtonGroup>
  

        </Box>
  )
}

export default Header
