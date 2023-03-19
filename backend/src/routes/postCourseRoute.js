import { courseData } from "../courseData";

export const postCourseRoute = {
    path: '/api/course',
    method: 'post',
    handler: (req, res) => {

        const { title, description, estimatedTime } = req.body;
        const id = Math.floor(process.uptime());
        const data = {
            id: id,
            title: title,
            description: description,
            estimatedTime: estimatedTime,
        }
        courseData.push(data);
        res.status(201).json({
            message: 'Course created successfully',
            course: data,
        });

    },
};