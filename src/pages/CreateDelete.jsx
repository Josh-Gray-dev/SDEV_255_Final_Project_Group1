export default function CreateDelete(){
    return (
    <main>
      <header>
        <h1>Create / Delete Courses</h1>
      </header>

      <section id="courses-section">
        {/* Add Course Button */}
        <button id="add-course-btn">+ Add Course</button>

        {/* Course Form */}
        <form id="course-form">
          <h3>Add New Course</h3>

          <label htmlFor="course-name">Course Name:</label>
          <input type="text" id="course-name" name="course-name" required />

          <label htmlFor="course-description">Description:</label>
          <textarea id="course-description" name="course-description" required></textarea>

          <label htmlFor="course-subject">Subject:</label>
          <input type="text" id="course-subject" name="course-subject" required />

          <label htmlFor="course-credits">Credits:</label>
          <input type="number" id="course-credits" name="course-credits" min="1" max="10" required />

          <div className="form-buttons">
            <button type="submit" id="save-course-btn">Save</button>
            <button type="button" id="cancel-course-btn">Cancel</button>
          </div>
        </form>
      </section>
    </main>
  );
}