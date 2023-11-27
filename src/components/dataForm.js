import React, { useEffect, useState } from "react";
import { formDb } from "../data/db"
import FormReview from "./formReview";

const DataForm = () => {
    const [formData, setFormData] = useState({
        course: "",
        coreSubjects: Array(3).fill({ subject: "", grade: "" }),
        electiveSubjects: Array(3).fill({ subject: "", grade: "" }),
    });

    const [showReview, setShowReview] = useState(false);
    const [courses, setCourses] = useState([]);
    const [coreSubjects, setCoreSubjects] = useState([]);
    const [courseContent, setCourseContent] = useState([]);
    const [grades, setGrades] = useState([]);
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const handleSubjectChange = (index, field, value, isCoreSubject, selectedGrade) => {
        setFormData((prevData) => {
            const updatedSubjects = isCoreSubject
                ? [...prevData.coreSubjects]
                : [...prevData.electiveSubjects];

            // Remove the deselected subject from the list
            const deselectedSubject = isCoreSubject ? updatedSubjects[index].subject : `${updatedSubjects[index].subject}-${index}`;
            setSelectedSubjects((prevSelectedSubjects) => prevSelectedSubjects.filter(subject => subject !== deselectedSubject));

            // Update the subject with the selected value
            updatedSubjects[index] = {
                ...updatedSubjects[index],
                subject: isCoreSubject ? value === prevData.course ? "" : value : value,
                grade: selectedGrade || "",
            };

            // Add the selected subject to the list
            setSelectedSubjects((prevSelectedSubjects) => [
                ...prevSelectedSubjects,
                isCoreSubject ? value : `${value}-${index}`, // Use a unique identifier for elective subjects
            ]);

            console.log('Selected Subjects:', selectedSubjects)

            return {
                ...prevData,
                coreSubjects: isCoreSubject ? updatedSubjects : prevData.coreSubjects,
                electiveSubjects: isCoreSubject ? prevData.electiveSubjects : updatedSubjects,
            };
        });
    };

    // Add this useEffect to log the updated state
    useEffect(() => {
        console.log('Updated FormData:', formData);
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowReview(true);
    };

    useEffect(() => {
        // Fetching course data

        setCourses(formDb.courses);
        setCoreSubjects(formDb.coreSubjects);
        setCourseContent(formDb.courseContent);
        setGrades(formDb.grades);

        // Clear subjects when the course changes
        setFormData((prevData) => ({
            ...prevData,
            electiveSubjects: prevData.electiveSubjects.map(() => ({ subject: "", grade: "" })),
        }));

    }, [formData.course]);


    return (
        <div className="formPage">
            <div className="note">
                <h2>
                    Enter your grades, and embark on your unique journey to higher
                    education.
                </h2>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                    voluptates. Recusandae repudiandae necessitatibus natus possimus ipsa!
                    Cumque eius aperiam harum doloribus nobis. Fugit sint adipisci a
                    iure, dolorum voluptas quod!
                </p>
            </div>

            <div className="formContainer">
                {showReview ? (
                    <FormReview formData={formData} onEdit={() => setShowReview(false)} />
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h2>Fill this form</h2>

                        <div className="formInput">
                            <label htmlFor="course">
                                <p>1. Course</p>
                            </label>

                            <select
                                className="choice"
                                name="course"
                                id="course"
                                value={formData.course}
                                onChange={(e) =>
                                    setFormData({ ...formData, course: e.target.value })
                                }
                                required
                            >
                                <option value="" disabled>
                                </option>
                                {courses &&
                                    courses.map((course, index) => (
                                        <option key={index} value={course}>
                                            {course}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        <div className="formInput">
                            <label htmlFor="subjects">
                                <p>2. Subjects and Grades</p>
                            </label>

                            {/* Core subjects */}
                            <p className="coAndEl">Core subjects</p>
                            <div className="subjects">
                                {formData.coreSubjects && formData.coreSubjects.slice(0, 3).map((subject, index) => (
                                    <div className="subject" key={index}>
                                        <select
                                            value={subject.subject}
                                            onChange={(e) => handleSubjectChange(index, 'subject', e.target.value, true, subject.grade)}
                                            className="subInput"
                                            required
                                        >
                                            <option value="" disabled></option>
                                            {coreSubjects.map((coreSubject, coreSubjectIndex) => (
                                                <option key={coreSubjectIndex} value={coreSubject} disabled={selectedSubjects.includes(coreSubject)}>
                                                    {coreSubject}
                                                </option>
                                            ))}
                                        </select>

                                        <select
                                            value={subject.grade}
                                            onChange={(e) => handleSubjectChange(index, 'grade', subject.subject, true, e.target.value)}
                                            className="grade"
                                            required
                                            disabled={!subject.subject}  // Disable if no subject is chosen
                                        >
                                            <option value="" disabled></option>
                                            {grades.map((grade, gradeIndex) => (
                                                <option key={gradeIndex} value={grade}>
                                                    {grade}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                ))}
                            </div>

                            {/* Elective subjects */}
                            {formData.course && (
                                <>
                                    <p className="coAndEl">Elective subjects</p>
                                    <div className="subjects">
                                        {formData.electiveSubjects && formData.electiveSubjects.slice(0, 3).map((subject, index) => (
                                            <div className="subject" key={index}>
                                                <select
                                                    value={subject.subject}
                                                    onChange={(e) => handleSubjectChange(index, 'subject', e.target.value, false, subject.grade)}
                                                    className="subInput"
                                                    required
                                                >
                                                    <option value="" disabled></option>
                                                    {courseContent && courseContent[formData.course] ? (
                                                        courseContent[formData.course].map((content, contentIndex) => (
                                                            <option
                                                                key={contentIndex}
                                                                value={content}
                                                                disabled={formData.electiveSubjects.some((el) => el.subject === content)}
                                                            >
                                                                {content}
                                                            </option>
                                                        ))
                                                    ) : (
                                                        <option value="" disabled></option>
                                                    )}
                                                </select>

                                                <select
                                                    value={subject.grade}
                                                    onChange={(e) => handleSubjectChange(index, 'grade', subject.subject, false, e.target.value)}
                                                    className="grade"
                                                    required
                                                    disabled={!subject.subject}  // Disable if no subject is chosen
                                                >
                                                    <option value="" disabled></option>
                                                    {grades.map((grade, gradeIndex) => (
                                                        <option key={gradeIndex} value={grade}>
                                                            {grade}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="toRev">
                            <button type="submit">Next</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default DataForm;
