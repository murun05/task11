import StudentProfileCard from './StudentProfileCard';

function App() {
  return (
    <div className="page-container">
      <h1>Student Directory</h1>

      <StudentProfileCard
        name="Otgonjargal Murun"
        studentId="202539440"
        major="Computer Engineering"
        year={3}
        gpa={4.4}
      />

      <StudentProfileCard
        name="Anand"
        studentId="202539455"
        major="Computer Science"
        year={2}
        gpa={4.3}
      />

      <StudentProfileCard
        name="Lhamaa"
        studentId="202637428"
        major="Software Engineering"
        year={4}
        gpa={4.2}
      />
    </div>
  );
}

export default App;
