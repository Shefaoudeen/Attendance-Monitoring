import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudentProfile = () => {
  const params = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`/api/students/${params.id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data.students));
  }, [params.id]);

  return (
    <div>
      {student ? (
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center w-full items-center my-3">
            <img
              src={student.image}
              className="w-[200px] h-[200px] rounded-3xl drop-shadow-lg object-fill"
            />
          </div>
          <h1 className="font-extrabold text-3xl text-center">
            {student.name}
          </h1>
          <p className="text-xl text-center">{student.regno}</p>
          <div className="border-2 w-fit mx-2 rounded-2xl">
            <table class="table-auto text-center border-collapse drop-shadow-xl">
              <thead>
                <tr>
                  <th>Subject Name</th>
                  <th class="border-x border-slate-600">Subject Code</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Microwave and Optical Engineering</td>
                  <td class="border-x border-slate-700">EC217</td>
                  <td>%</td>
                </tr>
                <tr>
                  <td>Data Communication Networks</td>
                  <td class="border-x border-slate-700">EC218</td>
                  <td>%</td>
                </tr>
                <tr>
                  <td>VLSI Design</td>
                  <td class="border-x border-slate-700">EC219</td>
                  <td>%</td>
                </tr>
                <tr>
                  <td>Control Systems Engineering</td>
                  <td class="border-x border-slate-700">EC219</td>
                  <td>%</td>
                </tr>
                <tr>
                  <td>Industrial Management and Economics</td>
                  <td class="border-x border-slate-700">HS202</td>
                  <td>%</td>
                </tr>
                <tr>
                  <td>Microwave and Optical Engineering Lab</td>
                  <td class="border-x border-slate-700">EC220</td>
                  <td>%</td>
                </tr>
                <tr>
                  <td>Data Communication Networks Lab</td>
                  <td class="border-x border-slate-700">EC220</td>
                  <td>%</td>
                </tr>
                <tr>
                  <td>VLSI Design Lab</td>
                  <td class="border-x border-slate-700">EC220</td>
                  <td>%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h1 className="font-extrabold text-center mb-6">OVERALL - %</h1>
          <footer className="fixed bottom-0 mt-4 text-center w-full bg-gray-300 py-2 font-semibold">
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
