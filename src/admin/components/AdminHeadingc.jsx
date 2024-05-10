import React from 'react'

const AdminHeadingc = (props) => {
  return (
    <div className="mt-6 min-w-[80rem] h-24 w-full bg-[#ecf2ff]  rounded-xl py-2 flex items-center justify-between shadow-[0px_0px_40px_0px_rgba(236,242,225,1)] sm:min-w-[20rem] sm:w-[22.4rem] sm:mx-2 sm:h-16 ">
    <p className="text-xl font-semibold ml-4 sm:text-sm">{props.name}</p>
    <img src={props.img} className="h-[9rem] w-[9rem] object-contain mr-4 sm:h-[5rem] sm:w-[5rem]" alt="img" />
  </div>
  )
}

export default AdminHeadingc