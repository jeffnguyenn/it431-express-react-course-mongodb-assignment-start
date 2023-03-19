import { courseData } from "../courseData";

export const getCourseRoute = {
    path: '/api/course/:id',
    method: 'get',
    handler: (req, res) => {
        const id = req.params.id;
        //console.log(restaurantData[id]);
        const course = courseData.find((course) => course.id === parseInt(id));
        res.status(200).send(course);
    },
};