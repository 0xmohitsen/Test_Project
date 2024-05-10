import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./login&signup/Login.jsx";
import Signup from "./login&signup/Signup.jsx";
import Admin from "./admin/Admin.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import AdminAttendance from "./admin/AdminAttendance.jsx";
import AdJobs from "./admin/AdJobs.jsx";
import AdminCandidates from "./admin/AdminCandidates.jsx";
import InterviewResult from "./admin/InterviewResult.jsx";
import EmployeeManagementmain from "./admin/EmployeeManagementmain.jsx";
import EmpmgmtProfile from "./common/EmpmgmtProfile.jsx";
import UpdateProfilePersonalDetail from "./common/UpdateProfilePersonalDetail.jsx";
import ContactDetails from "./common/ContactDetails.jsx";
import Nextkin from "./common/Nextkin.jsx";
import Financial from "./common/Financial.jsx";
import Financialdetails from "./common/Financialdetails.jsx";
import UpdateEdu from "./common/UpdateEdu.jsx";
import QualificationDetails from "./common/QualificationDetails.jsx";
import ViewGuarantorDetails from "./common/ViewGuarantorDetails.jsx";
import Gurentertetails from "./common/Gurentertetails.jsx";
import EditFamilyDetails from "./common/EditFamilyDetails.jsx";
import Familydetails from "./common/Familydetails.jsx";
import UserJobDetails from "./common/UserJobDetails.jsx";
import UploadDoc from "./common/UploadDoc.jsx";
import ViewDocs from "./common/ViewDocs.jsx";
import LeaveManagement from "./admin/LeaveManagement.jsx";
import LeavemgmtHero from "./admin/LeavemgmtHero.jsx";
import LeaveRecall from "./admin/LeaveRecall.jsx";
import LeaveSetting from "./admin/LeaveSetting.jsx";
import LeaveHist from "./admin/LeaveHist.jsx";
import PerformanceManagement from "./admin/PerformanceManagement.jsx";
import FrameComponent14 from "./admin/FrameComponent14.jsx";
import TargetSetup from "./admin/TargetSetup.jsx";
import Targets1 from "./admin/Targets1.jsx";
import EditTimesheet from "./admin/EditTimesheet.jsx";
import AdminTImesheet from "./admin/AdminTImesheet.jsx";
import AdminTickets from "./admin/AdminTickets.jsx";
import AdminCompli from "./admin/AdminCompli.jsx";
import AdminKPI from "./admin/AdminKPI.jsx";
import AdminTakeAppr from "./admin/AdminTakeAppr.jsx";
import ADMessage from "./admin/ADMessage.jsx";
import ChatAppChat from "./admin/ChatAppChat.jsx";
import ChatAppContacts from "./admin/ChatAppContacts.jsx";
import ChatAppArchive from "./admin/ChatAppArchive.jsx";
import NoteApp from "./common/NoteApp.jsx";
import AdminExitProcess2 from "./common/AdminExitProcess2.jsx";
import AdminExitProcess from "./common/AdminExitProcess.jsx";
import UserDashboard from "./user/pages/UserDashboard.jsx";
import Exitprocess from "./user/pages/Exitprocess.jsx";
import UserTakeAprisal from "./user/pages/UserTakeAprisal.jsx";
import LeaveApplication from "./user/pages/LeaveApplication.jsx";
import UserKPI from "./user/pages/UserKPI.jsx";
import UserAttendance from "./user/pages/UserAttendance.jsx";
import UserTimesheet from "./user/pages/UserTimesheet.jsx";
import UserTicket from "./user/pages/UserTicket.jsx";
import LMS from "./user/pages/LMS.jsx";
import UpdateProfile from "./user/pages/UpdateProfile.jsx";
import LeaveApplicationSickLeave from "./user/pages/LeaveApplicationSickLeave.jsx";
import Projects from "./admin/Projects.jsx";
import ProjectGrid from "./admin/components/ProjectGrid.jsx";
import ProjectTable from "./admin/components/ProjectTable.jsx";
import ProjectDetails from "./admin/ProjectDetails.jsx";
import EmpProject from "./user/components/EmpProject.jsx";
import Err from "./Err.jsx";
import Landing from "./login&signup/Landing.jsx";
// import Err from "./Err.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login &signup */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details" element={<Landing />} />

        <Route path="*" element={<Err/>} />
        {/* admin Section */}

        <Route path="/admin" element={<Admin />}>
        {/* <Route path="/*" element={<Err />} /> */}


          <Route index element={<AdminDashboard />} />
          <Route path="admin-attendance" element={<AdminAttendance />} />
          <Route path="jobs" element={<AdJobs />} />
          <Route path="candidates" element={<AdminCandidates />} />
          <Route path="interview-result" element={<InterviewResult />} />
          <Route path="emp-mgmt" element={<EmployeeManagementmain />} />
          <Route path="employee-profile" element={<EmpmgmtProfile />}>
            <Route index element={<UpdateProfilePersonalDetail />} />
            <Route path="UPContactDetails" element={<ContactDetails />} />
            <Route path="nextkin" element={<Nextkin />} />
            <Route path="financial" element={<Financial />} />
            <Route path="financial-details" element={<Financialdetails />} />
            <Route
              path="Update-educational-qualification"
              element={<UpdateEdu />}
            />
            <Route
              path="qualification-details"
              element={<QualificationDetails />}
            />
            <Route
              path="View-guarantor--Details"
              element={<ViewGuarantorDetails />}
            />
            <Route path="guarantor-Details" element={<Gurentertetails />} />
            <Route path="edit-family-details" element={<EditFamilyDetails />} />
            <Route path="family-details" element={<Familydetails />} />
            <Route path="user-job-details" element={<UserJobDetails />} />
            <Route path="upload-doc" element={<UploadDoc />} />
            <Route path="view-doc" element={<ViewDocs />} />
          </Route>

          <Route path="leave-management" element={<LeaveManagement />}>
            <Route index element={<LeavemgmtHero />} />
            <Route path="leave-history" element={<LeaveHist />} />
            <Route path="leave-Recall" element={<LeaveRecall />} />
            <Route path="leave-setting" element={<LeaveSetting />} />
          </Route>

          <Route
            path="performance-management"
            element={<PerformanceManagement />}
          >
            <Route index element={<FrameComponent14 />} />
            <Route path="trgt-setup" element={<TargetSetup />} />
            <Route path="trgts" element={<Targets1 />} />
          </Route>

          <Route path="admin-edit-timesheet" element={<EditTimesheet />} />
          <Route path="admin-timesheet" element={<AdminTImesheet />} />

          <Route path="admin-tickets" element={<AdminTickets />} />

          <Route path="admin-coppliences" element={<AdminCompli />} />
          <Route path="admin-KPI" element={<AdminKPI />} />
          <Route path="admin-take-apprisal" element={<AdminTakeAppr />} />

          <Route path="meassage" element={<ADMessage />}>
            <Route index element={<ChatAppChat />} />
            <Route path="chat-contacts" element={<ChatAppContacts />} />
            <Route path="chat-archive" element={<ChatAppArchive />} />
          </Route>

          <Route path="admin-notes" element={<NoteApp />} />
          <Route path="admin-exit-process" element={<AdminExitProcess />} />

          <Route
            path="admin-exit-process-form"
            element={<AdminExitProcess2 />}
          />
          <Route path="projects" element={<Projects />}>
            <Route index element={<ProjectGrid />} />
            <Route path="project-table" element={<ProjectTable />} />
          </Route>
          <Route path="project-details" element={<ProjectDetails />} />
        </Route>
        {/* User Section */}

        <Route path="/user" element={<UserDashboard />}></Route>
        <Route path="/leave-application" element={<LeaveApplication />} />
        <Route
          path="/leave-application-sick-leave"
          element={<LeaveApplicationSickLeave />}
        />
        <Route path="/user-KPI" element={<UserKPI />} />
        <Route path="/user-attendance" element={<UserAttendance />} />

        <Route path="/exit-process" element={<Exitprocess />} />
        <Route path="/take-appraisal" element={<UserTakeAprisal />} />
        <Route path="/time-sheet" element={<UserTimesheet />} />

        <Route path="/user-tickets" element={<UserTicket />} />
        <Route path="/LMS" element={<LMS />} />
        <Route path="/emp-project" element={<EmpProject />} />

        {/** User update profile */}

        <Route path="/user-profile" element={<UpdateProfile />}>
          <Route index element={<UpdateProfilePersonalDetail />} />
          <Route path="UPContactDetails" element={<ContactDetails />} />
          <Route path="nextkin" element={<Nextkin />} />
          <Route path="financial" element={<Financial />} />
          <Route path="financial-details" element={<Financialdetails />} />
          <Route
            path="Update-educational-qualification"
            element={<UpdateEdu />}
          />
          <Route
            path="qualification-details"
            element={<QualificationDetails />}
          />
          <Route
            path="View-guarantor--Details"
            element={<ViewGuarantorDetails />}
          />
          <Route path="guarantor-Details" element={<Gurentertetails />} />
          <Route path="edit-family-details" element={<EditFamilyDetails />} />
          <Route path="family-details" element={<Familydetails />} />
          <Route path="user-job-details" element={<UserJobDetails />} />
          <Route path="upload-doc" element={<UploadDoc />} />
          <Route path="view-doc" element={<ViewDocs />} />
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
