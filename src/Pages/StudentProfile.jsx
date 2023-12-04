import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import number from "../Records/total";

const StudentProfile = () => {
  const params = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`/api/students/${params.id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data.students));
  }, [params.id]);

  return (
    <div className="h-[100vh] flex items-center w-full justify-center lg:-mt-[100px]">
      {student ? (
        <div className="flex max-sm:flex-col max-sm:justify-center items-center justify-around w-full">
          <div className="flex flex-col justify-center max-sm:w-full items-center  my-3">
            <img
              src={student.image}
              className="max-sm:w-[200px] max-sm:h-[200px] rounded-3xl drop-shadow-lg object-fill w-[400px] h-[400px]"
            />
          </div>
          <div>
            <h1 className="font-extrabold text-3xl text-center">
              {student.name}
            </h1>
            <p className="text-xl text-center">{student.regno}</p>
            <div className="border-2 max-sm:w-fit mx-2 rounded-2xl w-full">
              <table class="table-auto text-center drop-shadow-xl lg:text-xl border-separate lg:[border-spacing:0.75rem] max-sm:[border-spacing:0.5rem]">
                <thead>
                  <tr>
                    <th>Subject Name</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Microwave and Optical Engineering</td>

                    <td>{(student.attendance.moe / number.moe) * 100}%</td>
                  </tr>
                  <tr>
                    <td>Data Communication Networks</td>

                    <td>{(student.attendance.dcn / number.dcn) * 100}%</td>
                  </tr>
                  <tr>
                    <td>VLSI Design</td>

                    <td>{(student.attendance.vd / number.vd) * 100}%</td>
                  </tr>
                  <tr>
                    <td>Control Systems Engineering</td>

                    <td>{(student.attendance.cse / number.cse) * 100}%</td>
                  </tr>
                  <tr>
                    <td>Industrial Management and Economics</td>

                    <td>{(student.attendance.ime / number.ime) * 100}%</td>
                  </tr>
                  <tr>
                    <td>Microwave and Optical Engineering Lab</td>
                    <td>{(student.attendance.moel / number.moel) * 100}%</td>
                  </tr>
                  <tr>
                    <td>Data Communication Networks Lab</td>
                    <td>{(student.attendance.dcnl / number.dcnl) * 100}%</td>
                  </tr>
                  <tr>
                    <td>VLSI Design Lab</td>

                    <td>{(student.attendance.vdl / number.vdl) * 100}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h1 className="font-extrabold text-center max-sm:mb-6 lg:mt-4">
              OVERALL - %
            </h1>
          </div>
          <footer className="fixed bottom-0 max-sm:mt-4 text-center w-full bg-gray-300 py-2 font-semibold">
            &#169; Shefa 2024
          </footer>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <h1 className="font-bold text-center text-2xl">Loading..</h1>
        </div>
      )}
    </div>
  );
};

export default StudentProfile;
