import { getDbConnection } from '../db';
import { ObjectId } from "mongodb";

export const getCourseRoute = {
    path: '/api/course/:id',
    method: 'get',
    handler: async (req, res) => {
        const id = parseInt(req.params.id);

        const query = { "_id": id };
        
        const db = getDbConnection('courses');
        const result = await db.collection('courses').findOne(query);

        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send("Course not found")
        }
    },
};