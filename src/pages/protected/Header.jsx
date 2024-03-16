import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const Header = () => {
  const {pathname} = useLocation()
  return (
      <div className='flex justify-center mt-5'>
        <div className='w-[600px] h-[70px] rounded-3xl bg-indigo-900 flex items-center p-5 text-white font-semibold text-base justify-between'>
          <Link to={'/'}><h1 className={pathname === '/' && 'text-yellow-300'}>Home</h1></Link> 
          <Link to={'/profile'}><h1 className={pathname === '/profile' && 'text-yellow-300'}>Profile</h1></Link> 
          <Link to={'/password'}><h1 className={pathname === '/password' && 'text-yellow-300'}>Change Password</h1></Link> 
          <Link to={'/upload-video'}><h1 className={pathname === '/upload-video' && 'text-yellow-300'}>Upload Video</h1></Link> 
          <Link to={'/logout'}><h1 className={pathname === '/logout' && 'text-yellow-300'}>Logout</h1></Link> 
        </div>
      </div>
  )
}

export default Header