import React from 'react'
import { Box,Spinner } from "@chakra-ui/react"


export default function Loading() {
  return (
    <Box display="flex" justifyContent="center" p={50} >
    <Spinner size="lg"/>
  </Box>
  )
}

