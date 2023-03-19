//delete a course

// Compare this snippet from backend/src/routes/deleteCourseRoute.js:
import { courseData } from "../courseData";

export const deleteCourseRoute = {
    path: '/api/course/:id',
    method: 'delete',
    handler: (req, res) => {
        const id = req.params.id;
        const course = courseData.find((course) => course.id === parseInt(id));

        if (!course) {
            res.status(404).json({
                message: 'Course not found'

            });
        }

        const index = courseData.indexOf(course);
        console.log(index);
        console.log(course);
        courseData.splice(index, 1);
        res.status(200).json({
            message: 'Course deleted successfully'
        });
    }
};

