import React from "react";

const ChatAppChat = () => {
  const chatData = [
    {
      dp:"/ellipse-12@2x.png",
      name:'Raghab',
      messg:'How are you?',
      no:'2',
    },
    {
      dp:"/ellipse-13@2x.png",
      name:'Banshi',
      messg:'project status',
      no:'2',
    },
    {
      dp:"/ellipse-14@2x.png",
      name:'Ram',
      messg:'hey bro!!',
      no:'2',
    },
    {
      dp:"/ellipse-12@2x.png",
      name:'Krish',
      messg:'send images',
      no:'5',
    },
    {
      dp:"/ellipse-13@2x.png",
      name:'lema ',
      messg:'nope!',
      no:'78',
    },
    {
      dp:"/ellipse-14@2x.png",
      name:'jonny',
      messg:'How are you?',
      no:'2',
    },
  ]

  return (
    <div>
      {chatData.map((i)=>{ 
        return(<><div key={i.name} className="flex p-3 gap-3 items-center  hover:bg-slate-100">
        <div>
          <img src={i.dp} alt="" className="h-14 w-14" />
        </div>
        <div className="w-[5rem] flex justify-center flex-col h-10">
          <p className="flex items-center h-0 text-sm font-semibold ">
            {i.name}
          </p>
          <p className=" flex items-center h-0 text-smi text-gray-800">
            {i.messg}
          </p>
        </div>
        <div className="sticky ml-[11rem] mb-6 bg-green-500 font-semibold text-white h-fit w-fit min-w-4 flex justify-center items-center rounded-full text-smi p-[0.05rem]">
         {i.no}
        </div>
        </div>
        </> 
      )
      })}
    </div>
  );
};

export default ChatAppChat;
