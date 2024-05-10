const FrameComponent10 = ({
  filename,
  
}) => {
  

  return (
    <div
      className=" rounded-6xs bg-aliceblue flex flex-col items-center justify-evenly h-[11rem] w-[14rem] gap-8 z-[1] text-center text-mini text-black font-product-sans"
    >
        <img
          className="h-[4rem] w-[4rem] relative overflow-hidden shrink-0 z-[2]"
          loading="eager"
          alt=""
          src="/pdfsvgrepocom-1.svg"
        />
      <div className="">
        {filename}
      </div>
    </div>
  );
};

export default FrameComponent10;
