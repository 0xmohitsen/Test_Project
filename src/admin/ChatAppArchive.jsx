import React from 'react'

const ChatAppArchive = () => {
  return (
    <div><div className="flex p-3 gap-3 items-center bg-pink-50 shadow-sm">
    <div>
      <img src="/ellipse-12@2x.png" alt="" className="h-14 w-14" />
    </div>
    <div className="flex justify-center flex-col h-10">
      <p className="flex items-center h-0 text-sm font-semibold ">
        John doe
      </p>
      <p className="flex items-center h-0 text-smi text-gray-800">
        How Are You?
      </p>
    </div>
    <div className="ml-[11rem] mb-6 bg-green-500 font-semibold text-white h-fit w-fit min-w-4 flex justify-center items-center rounded-full text-smi p-[0.05rem]">
      1
    </div>
  </div></div>
  )
}

export default ChatAppArchive