import { NavLink } from "react-router-dom";

const EducationQualificationsFrame = () => {
  const Editems = [
    {
      name: "Personal Details",
      link: "",
    },
    {
      name: "Contact Details",
      link: "UPContactDetails",
    },
    {
      name: "Next of kin Details",
      link: "nextkin",
    },
    {
      name: "Education Qualifications",
      link: "Update-educational-qualification",
    },
    {
      name: "Guarantor Details",
      link: "View-guarantor--Details",
    },
    {
      name: "Family Details",
      link: "edit-family-details",
    },
    {
      name: "Job Details",
      link: "user-job-details",
    },
    {
      name: "Financial Details",
      link: "financial",
    },
  ];

  return (
    <div className=" h-[37rem] w-[22rem] rounded-mini bg-white  flex flex-col font-product-sans  items-center justify-center gap-3 sm:flex-row sm:w-[20rem] sm:overflow-scroll sm:h-fit sm:ml-[10rem] no-scrollbar ">
      {Editems.map((item) => {
        return (
          <NavLink
          key={item.name}
            end
            className={
              "bg-aliceblue no-underline h-[3.8rem] w-[21rem] cursor-pointer text-[#505050]  rounded-mini flex  items-center justify-center hover:bg-lightgray sm:min-w-[10rem]"
            }
            to={item.link}
          >
            {item.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default EducationQualificationsFrame;
