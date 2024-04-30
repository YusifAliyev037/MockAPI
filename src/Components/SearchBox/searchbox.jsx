import React, { useState } from 'react'
import {  Box,Input,Button } from "@chakra-ui/react"

 function Searchbox({onFocus,onSearch}) {

    const [search, setSearch] = useState("");

    const handleSubmit = ()=>{
        onSearch(search)
    }

  return (
    <Box display="flex"  alignItems="center" gap={4}>
    <Input 
        value={search} 
        placeholder='Search' 
        onFocus={onFocus}
        mx={50} 
        onChange={(e)=>setSearch(e.target.value)}
        />
      <Button colorScheme='teal' onClick={handleSubmit}>Search</Button>
    </Box>
  )
}

export default Searchbox
