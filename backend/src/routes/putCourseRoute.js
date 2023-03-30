import { getDbConnection } from '../db';
import { ObjectId } from 'mongodb';

export const putCourseRoute = {
    path: '/api/course/:id',
    method: 'put',
    handler: async (req, res) => {
        const id = parseInt(req.params.id);

        const query = { "_id": id };

        const db = getDbConnection('courses');
        const existingCourse = await db.collection('courses').findOne(query)

        if (existingCourse) {
            const courseData = req.body
            delete courseData._id;
            const result = await db.collection('courses').findOneAndUpdate(
                { _id: id },
                { $set: courseData },
                { returnOriginal: false }
            );

            res.status(200).send(result.value);
        } else {
            res.status(404).send('Course not found');
        }
    }
};

