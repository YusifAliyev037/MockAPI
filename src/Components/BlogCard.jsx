import React from 'react'
import { 
    Image,
    CardBody,
    Stack,
    Text,
    CardFooter,
    Button,
    Heading,
    Card
  } from "@chakra-ui/react"
import { shortText } from '../Utils/shortText'

function BlogCard({title, cover_url,desc, onReadMore}) {

  return (
    <div>
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={cover_url}
    alt={title}
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{title}</Heading>

      <Text py='2'>
      {shortText(desc, 80)}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='teal' onClick={onReadMore}>
        Read More
      </Button>
    </CardFooter>
  </Stack>
</Card>
    </div>
  )
}

export default BlogCard
