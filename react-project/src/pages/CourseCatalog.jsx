export default function CourseCatalog(){
    return <h1>This is a list of the currently available courses with descriptions.</h1>
}
export default function Courses() {

 const courses = [

   {
     Name: "Introduction to Algebra 1",
 
     Description: "Covers the Basics of algebra including graphing and solving equations.",

     Subject: "Mathematics",

     Credits: 4
   },
   {
     Name: "American History"

     Description: "A summary of important events, Wars, and Moments that formed our country.",

     Subject: "History",

     Credits: 5
    },
    {
      Name: "General Chemistry",

      Description: "Covers atomic structure, chemical bonding, reactions, and stoichiometry.",

      Subject: "Chemistry",

      Credits: 3
    },
    {
      Name: "Introduction to Psychology",

      Description: "Explores human behavior, cognition, and emotion through scientific methods.",

      Subject: "Psychology",

      Credits: 3
     },
     {
       Name: "Introduction to Computer Science",

       Description: "Covers the basics of programming, algorithms, and problem-solving using Python.",

       Subject: "Computer Science",

       Credits: 3
     },
     {
       Name: "Principles of Economics",

       Description: "Introduces microeconomics and macroeconomics with real-world applications.",

       Subject: "Economics",

       Credits: 3
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Subject</th>
            <th className="border px-2 py-1">Description</th>
            <th className="border px-2 py-1">Credits</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{course.Name}</td>
              <td className="border px-2 py-1">{course.Subject}</td>
              <td className="border px-2 py-1">{course.Description}</td>
              <td className="border px-2 py-1">{course.Credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
