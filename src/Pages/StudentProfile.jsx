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

  function calculatePercentage(a, b) {
    return (a / b) * 100;
  }

  return (
    <div className="h-[100vh] flex items-center w-full justify-center lg:-mt-[100px]">
      {student ? (
        <div className="flex max-sm:flex-col max-sm:justify-center items-center justify-around w-full">
          <div className="flex flex-col justify-center max-sm:w-full items-center  lg:my-3 ">
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
            <div className="border-2 max-sm:w-fit mx-2 rounded-2xl w-full max-sm:px-2">
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

                    <td>
                      {calculatePercentage(student.attendance.moe, number.moe)}%
                    </td>
                  </tr>
                  <tr>
                    <td>Data Communication Networks</td>

                    <td>
                      {calculatePercentage(student.attendance.dcn, number.dcn)}%
                    </td>
                  </tr>
                  <tr>
                    <td>VLSI Design</td>

                    <td>
                      {calculatePercentage(student.attendance.vd, number.vd)}%
                    </td>
                  </tr>
                  <tr>
                    <td>Control Systems Engineering</td>

                    <td>
                      {calculatePercentage(student.attendance.cse, number.cse)}%
                    </td>
                  </tr>
                  <tr>
                    <td>Industrial Management and Economics</td>

                    <td>
                      {calculatePercentage(student.attendance.ime, number.ime)}%
                    </td>
                  </tr>
                  <tr>
                    <td>Microwave and Optical Engineering Lab</td>
                    <td>
                      {calculatePercentage(
                        student.attendance.moel,
                        number.moel
                      )}
                      %
                    </td>
                  </tr>
                  <tr>
                    <td>Data Communication Networks Lab</td>
                    <td>
                      {calculatePercentage(
                        student.attendance.dcnl,
                        number.dcnl
                      )}
                      %
                    </td>
                  </tr>
                  <tr>
                    <td>VLSI Design Lab</td>

                    <td>
                      {calculatePercentage(student.attendance.vdl, number.vdl)}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h1 className="font-extrabold text-center max-sm:mb-6 lg:mt-4">
              OVERALL -{" "}
              {(
                ((student.attendance.moe / number.moe +
                  student.attendance.dcn / number.dcn +
                  student.attendance.vd / number.vd +
                  student.attendance.cse / number.cse +
                  student.attendance.ime / number.ime +
                  student.attendance.moel / number.moel +
                  student.attendance.dcnl / number.dcnl +
                  student.attendance.vdl / number.vdl) /
                  8) *
                100
              ).toFixed(2)}
              %
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
