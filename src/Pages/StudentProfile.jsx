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
    <div className="h-screen">
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
