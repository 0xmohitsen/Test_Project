import ContainerFrame from "./components/ContainerFrame";
import DownloadButton from "./components/DownloadButton";



const AdminDashboard = () => {
  return (
    <>
      <div className=" overflow-x-hidden overflow-y-scroll no-scrollbar w-full h-[88vh]">
        <DownloadButton />
        <ContainerFrame />
      </div>
    </>
  );
};

export default AdminDashboard;
