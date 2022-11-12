import React from 'react';

export default function index() {
  return (
  <section className='bg-gray-50 min-h-screen flex items-center justify-center '>
    <div className='bg-cyan-100 flex shadow-lg rounded-2xl max-w-3xl'>
      {/* Info Section */}
      <div className=" sm:w-1/2 px-16">
        <h2 className='font-bold text-2xl pt-4'>Login</h2>
        <p className='text-sm my-4'>if you already a member, easily login in </p>
        <form action="" className='flex flex-col'>
          <input className="p-2 mt-8 rounded-xl border w-full" type="email" name="email" placeholder='Email'/>
          <div className="relative">
          <input className="p-2 mt-4 rounded-xl border w-full" type="password" name="password" placeholder='Password'/>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye absolute top-1/2 right-2" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>
          </div>
          <button className="p-2 mt-4 text-white rounded-xl border bg-[#002D74]">Login</button>
        </form>

        <div className='mt-8 flex justify-center items-center text-gray-400'>
          <hr className="border-gray-500 w-[7vw]"/>
          <p className="px-3">OR</p>
          <hr className="border-gray-500 w-[7vw]"/>
        </div> 
               
   <button className='bg-white border py-1 w-full rounded-xl mt-5 flex inline-block justify-center text-semibold items-center'> <span><img className="px-1 w-8 h-8"src="googlelogo.svg" alt="" /></span> Login with Google</button>
    
    <p className="mt-5 text-xs border-b py-2 text-center">Forget your password?</p>

    <div className="flex justify-between gap-2 mt-3 items-center py-2">
      <p className='text-xs'>Don't have an account?</p>
      <button className="text-xs border-1 bg-white rounded-xl p-2 px-3 border-1 ">Register</button>
    </div>


      </div>
      {/* Image Section */}
      <div  className="sm:w-1/2 p-5">
        
      <img className="rounded-2xl hidden sm:block rounded-2xl" src="login.jpg"/>
      </div>
    </div>
   
  
  </section>

  )
}

