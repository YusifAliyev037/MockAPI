import React, { useEffect } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import Header from '../../Components/Header'
import { useTitle } from '../../Hooks/useTitle'
import { getFaqs } from '../../Services/faq'
import { useFetchData } from '../../Hooks/useFetchData'
import Loading from '../Loading'


function Faq() {

  useTitle("FAQ | Blog app")

  const {data, loading} = useFetchData({requestFn: () => getFaqs()})

  // useEffect(() => {
  //   const fetchData = async ()=>{
  //     const data = await getFaqs()

  //     console.log(data);
  //   }
  //   fetchData()
  // },[])

  if(loading){
     
    return <Loading/>
  }

  return (
    <div>
      <Header/> 
      <Accordion p="60px">

        {data?.faqs?.map((faq)=>(
          <AccordionItem key={ "faq-id"+ faq?.id}>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                {faq?.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {faq?.desc}
          </AccordionPanel>
        </AccordionItem>
        ))}
</Accordion>
    </div>
  )
}

export default Faq
