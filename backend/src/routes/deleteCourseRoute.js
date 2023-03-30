import { getDbConnection } from '../db';
import { ObjectId } from 'mongodb';

export const deleteCourseRoute = {
    path: '/api/course/:id',
    method: 'delete',
    handler: async (req, res) => {
        const id = parseInt(req.params.id);
        const query = { "_id": id };
        const db = getDbConnection('courses');
        const existingCourse = await db.collection('courses').findOne(query);

        if (existingCourse) {
            const result = await db.collection('courses').deleteOne(query);
            res.status(200).send('Course deleted')
        } else {
            res.status(404).send('Course not found');
        }
    }
};

