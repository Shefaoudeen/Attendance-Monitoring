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
              className="w-[300px] h-[300px] rounded-3xl drop-shadow-lg object-fill"
            />
          </div>
          <h1 className="font-extrabold text-3xl text-center">
            {student.name}
          </h1>
          <p className="text-xl text-center">{student.regno}</p>

          <table class="table-auto mb-10 mx-2 text-center">
            <thead>
              <tr>
                <th>Subject Name</th>
                <th>Subject Code</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Microwave and Optical Engineering</td>
                <td>EC217</td>
                <td>%</td>
              </tr>
              <tr>
                <td>Data Communication Networks</td>
                <td>EC218</td>
                <td>%</td>
              </tr>
              <tr>
                <td>VLSI Design</td>
                <td>EC219</td>
                <td>%</td>
              </tr>
              <tr>
                <td>Control Systems Engineering</td>
                <td>EC219</td>
                <td>%</td>
              </tr>
              <tr>
                <td>Industrial Management and Economics</td>
                <td>HS202</td>
                <td>%</td>
              </tr>
              <tr>
                <td>Microwave and Optical Engineering Lab</td>
                <td>EC220</td>
                <td>%</td>
              </tr>
              <tr>
                <td>Data Communication Networks Lab</td>
                <td>EC220</td>
                <td>%</td>
              </tr>
              <tr>
                <td>VLSI Design Lab</td>
                <td>EC220</td>
                <td>%</td>
              </tr>
            </tbody>
          </table>
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
