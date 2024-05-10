const DownloadButton = () => {
  const hScrollData = [
    {
      logo: "icon-mailbox.svg",
      no: 100,
      name: "Projects",
      bg: "#e8f7ff",
      col:'#49beff',
    },
    {
      logo: "/icon-briefcase.svg",
      no: 50,
      name: "Clients",
      bg: "#fef5e5",
      col: "#ffae1f",
    },
    {
      logo: "/male.svg",
      no: 100,
      name: "Employees",
      bg: "#ecf2ff",
      col:'#5d87ff',
    },
    {
      logo: "/icon-connect.svg",
      no: 20,
      name: "Leaves",
      bg: "#fdede8",
      col: "#fa896b",
    },
    {
      logo: "/icon-speech-bubble.svg",
      no: 200,
      name: "Payroles",
      bg: "#e6fffa",
      col: "#13deb9",
    },
    {
      logo: "/icons8-candidate-64.png",
      no: 100,
      name: "Candidates",
      bg: "#ebf3fe",
      col: "#569dff",
    },
    {
      logo: "/icon-favorites.svg",
      no: 50,
      name: "Resumes",
      bg: "#fdede8	",
      col:'#fa896b'
    },
    
  ];

  return (
    <div className=" mb-8  flex flex-col items-center justify-start  w-full text-left text-6xl  font-product-sans ">
      <h3 className="w-full ml-[5rem] sm:ml-14 sm:text-sm   ">Dashboard</h3>

      <div className="w-[75rem] relative flex  items-center  sm:w-[20rem]">
        <div
          id="slider"
          className="flex items-center gap-6 min-w-20 max-w-[97rem] h-fit  overflow-y-hidden overflow-x-scroll  scroll  scroll-smooth flex-nowrap  no-scrollbar sm:gap-3"
        >
          {hScrollData.map((item) => {
            return (
              <div className=" ex flex flex-col h-fit items-center   min-w-[12rem]  wrap rounded-sm sm:min-w-24" style={{ background: item.bg }}>
                
                  <img className="h-[4rem] w-[4rem] sm:h-[2rem] sm:h-[2rem]" src={item.logo} alt="" />
                <div style={{color:item.col}} className="h-[] flex-wrap  flex flex-col  items-center">
                  <p className="h-[0rem]  text-mini sm:text-smi">{item.name}</p>
                  <p className="h-[0rem] flex  items-center sm:text-smi">{item.no}</p>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DownloadButton;
