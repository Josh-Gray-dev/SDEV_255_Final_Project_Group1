import { useState } from "react";

export default function CourseCatalog() {
  const [courses, setCourses] = useState([
    {
      Name: "Introduction to Algebra 1",
      Description: "Covers the Basics of algebra including graphing and solving equations.",
      Subject: "Mathematics",
      Credits: 4,
    },
    {
      Name: "American History",
      Description: "A summary of important events, wars, and moments that formed our country.",
      Subject: "History",
      Credits: 5,
    },
    {
      Name: "General Chemistry",
      Description: "Covers atomic structure, chemical bonding, reactions, and stoichiometry.",
      Subject: "Chemistry",
      Credits: 3,
    },
    {
      Name: "Introduction to Psychology",
      Description: "Explores human behavior, cognition, and emotion through scientific methods.",
      Subject: "Psychology",
      Credits: 3,
    },
    {
      Name: "Introduction to Computer Science",
      Description: "Covers the basics of programming, algorithms, and problem-solving using Python.",
      Subject: "Computer Science",
      Credits: 3,
    },
    {
      Name: "Principles of Economics",
      Description: "Introduces microeconomics and macroeconomics with real-world applications.",
      Subject: "Economics",
      Credits: 3,
    },
  ]);

  // Delete a course
  const handleDelete = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  // Edit a course using prompt dialogs
  const handleEdit = (index) => {
    const updatedCourses = [...courses];
    const course = updatedCourses[index];

    const newName = prompt("Edit Course Name:", course.Name);
    const newSubject = prompt("Edit Subject:", course.Subject);
    const newDescription = prompt("Edit Description:", course.Description);
    const newCredits = prompt("Edit Credits:", course.Credits);

    // If user clicked Cancel on any prompt, keep old values
    updatedCourses[index] = {
      Name: newName || course.Name,
      Subject: newSubject || course.Subject,
      Description: newDescription || course.Description,
      Credits: newCredits || course.Credits,
    };

    setCourses(updatedCourses);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <div className="table-container">
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Subject</th>
            <th className="border px-2 py-1">Description</th>
            <th className="border px-2 py-1">Credits</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{course.Name}</td>
              <td className="border px-2 py-1">{course.Subject}</td>
              <td className="border px-2 py-1">{course.Description}</td>
              <td className="border px-2 py-1">{course.Credits}</td>
              <td className="border px-2 py-1">
                <button onClick={() => handleEdit(index)} className="btn-edit mr-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(index)} className="btn-delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
