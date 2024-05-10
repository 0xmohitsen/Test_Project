import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminHeadingc from '../admin/components/AdminHeadingc'

const AdminExitProcess = () => {
    const navigate = useNavigate()
  return (
    <section className=" flex flex-col items-center justify-center text-left text-black font-product-sans mq450:gap-[219px] mq900:gap-[219px] mq1275:gap-[219px]">
      <div className="flex flex-col items-start justify-center gap-8 max-w-full mq900:gap-[33px]">
       <AdminHeadingc name="Exit Process" img="/exithead.png"/>

        <div className="overflow-x-scroll no-scrollbar relative  bg-white w-full h-full rounded-xl pb-4 flex justify-start items-center">
          <table className=" w-full border shadow-lg">
            <tr className=" bg-aliceblue text-center h-[4rem]">
              <th>Job Title</th>
              <th>Candidate Name</th>
              <th>E-mail Address</th>
              <th>Contact Number</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            <tr className="  text-center h-[4rem]">
              <td>Backend</td>
              <td>Avishake d</td>
              <td>ab@gmail.com</td>
              <td>98544465651</td>
              <td>21/03/2024</td>
              <td><button  className='bg-[#5d87ff] text-white rounded-lg w-[6rem] h-10 '
               onClick={()=>navigate('/admin/admin-exit-process-form')}>Process Exit</button></td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  )
}

export default AdminExitProcess