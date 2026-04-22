import "./Education.css"

function Education() {
  // const courses = [
  //   "Database Management Systems",
  //   "Computer Networks",
  //   "Software Engineering",
  //   "Web Development",
  // ]

  return (
    <section id="education" className="education">
      <div className="container education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <p className="university">Malla Reddy Engineering College, 2024 - 2026</p>
          <h3 className="degree">Master of Technology in Computer Science and Engineering</h3>
          <p className="grade">Graduated with First Class Honors (CGPA: 8.0/10)</p>


          <p className="university">Malla Reddy Engineering College, 2021 - 2024</p>
          <h3 className="degree">Bachelor of Technology in Information Technology</h3>
          <p className="grade">Graduated with First Class Honors (CGPA: 7.8/10)</p>

          <p className="university">VMR Polytechnic College, 2018 - 2021</p>
          <h3 className="degree">Diploma in Mechanical Engineering</h3>
          <p className="grade">CGPA: 8.9/10</p>

          <p className="university">Telangana State Model School, 2017 - 2018</p>
          <h3 className="degree">Secondary School Certificate (SSC)</h3>
          <p className="grade">CGPA: 8.2/10</p>

          {/* <h4 className="courses-title">Key Courses:</h4>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div className="course-item" key={index}>
                <div className="course-bullet"></div>
                <span>{course}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Education
