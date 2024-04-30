import React from 'react'
import { Box, Text } from "@chakra-ui/react"
import { useTitle } from '../../Hooks/useTitle'

function NotFound() {
  useTitle("NotFound | Blog app")

  return (
    <div>
        
        {/* <Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" /> */}

{/* <Box w="100%" h="200px" bgGradient="radial(gray.300, yellow.400, pink.200)" /> */}

<Text
  bgGradient="linear(to-l, #7928CA, #FF0080)"
  bgClip="text"
  fontSize="6xl"
  fontWeight="extrabold"
>
    404page
</Text>
    </div>
  )
}

export default NotFound
