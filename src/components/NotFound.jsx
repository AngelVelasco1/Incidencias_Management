import React from 'react'
import { Link, Button } from "@nextui-org/react";
import { Image } from '@nextui-org/react'

    
export const NotFound = () => {
  return (
    <>
    <div className= "flex  items-center flex-col w-screen h-screen bg-[#EEE]">
    <Image className='mt-20' src='./src/assets/404_error.png' width={800} height={100}></Image>
     <Button
     className= " w-1/8"
      href="/"
      as={Link}
      color="primary"
      variant="flat"
    >
      Go back
    </Button>
    </div>

    </>
   
  )
}
