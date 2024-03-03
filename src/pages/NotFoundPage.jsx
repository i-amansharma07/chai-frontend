import React from 'react'
import ParentLayout from "../components/ParentLayout";


const NotFoundPage = () => {
  return (
    <ParentLayout>
      <div className='h-[500px] w-full flex justify-center items-center text-2xl font-bold'>{`404 Page Not Found :(`}</div>
    </ParentLayout>
    
  )
}

export default NotFoundPage