"use client"
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import React from 'react'

const WindowBackButton = () => {
  return (
    <Button size={"icon"} variant={"link"} onClick={()=> window.history.back()} className='cursor-pointer hover:bg-gray-200 p-4 rounded-full'><ArrowLeft /></Button>
  )
}

export default WindowBackButton