//delete a course

// Compare this snippet from backend/src/routes/deleteCourseRoute.js:
import { courseData } from "../courseData";

export const putCourseRoute = {
    path: '/api/course/:id',
    method: 'put',
    handler: (req, res) => {
        const id = req.params.id;
        const course = courseData.find((course) => course.id === parseInt(id));

        if (!course) {
            res.status(404).json({
                message: 'Course not found'

            });
        }

        const index = courseData.indexOf(course);

        const { title, description, estimatedTime } = req.body;
        const data = {
            id: parseInt(id),
            title: title,
            description: description,
            estimatedTime: estimatedTime,
        }
        courseData[index] = data;
        res.status(200).json({
            message: 'Course updated successfully'
        });
    }
};

