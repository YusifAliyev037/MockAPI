import React from 'react'
import { 
    Breadcrumb,
  
    BreadcrumbItem,
    BreadcrumbLink

    
  } from "@chakra-ui/react"
  import {  ChevronRightIcon} from '@chakra-ui/icons'

function Breadcrumbs({routes}) {
  return (
    <div>
        <Breadcrumb py={4} px={10} spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
          {routes?.map((routName) =>(
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>{routName}</BreadcrumbLink>
  </BreadcrumbItem>
          ))}



 
</Breadcrumb>
    </div>
  )
}


export default Breadcrumbs