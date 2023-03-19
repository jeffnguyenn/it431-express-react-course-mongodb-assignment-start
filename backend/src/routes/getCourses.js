import { courseData } from "../courseData";

export const getCoursesRoute = {
    path: '/api/course',
    method: 'get',
    handler: (req, res) => {
        res.status(200).send(courseData);
    },
};