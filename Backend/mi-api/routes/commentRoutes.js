import express from 'express';
import {
    createCommentController,
    getCommentsByProjectController,
    deleteCommentByIdController
} from '../controllers/commentController.js';

const commentsRouter = express.Router();

/*
*
* Example: POST http://localhost:3000/comments
* JSON example:
{
   "text": "Este es un comentario de prueba",
   "author": "60b5d8d7f27f1e001f28a0e1", 
   "project": "60b5d8d7f27f1e001f28a0e2" 
}
*
*/
commentsRouter.post('/', createCommentController );

/*
*
* Example: GET http://localhost:3000/comments/project/6793016ef6ae53611e32d8eb
*JSON response example:
	{
		"_id": "6796be1a03deb939c442d8ad",
		"text": "Este es un comentario de prueba",
		"author": {
			"_id": "679427ca21ee4f36fc56ebf8",
			"name": "John Doe",
			"profilePicture": ""
		},
		"project": "6793016ef6ae53611e32d8eb",
		"commentDate": "2025-01-26T22:58:34.920Z",
		"__v": 0
	},
	{
		"_id": "6797e3eb45497f493574a527",
		"text": "Buen proyecto! los apoyo. Saludos",
		"author": {
			"_id": "67910abcd1a948a9fab36ee7",
			"name": "Admin",
			"profilePicture": ""
		},
		"project": "6793016ef6ae53611e32d8eb",
		"commentDate": "2025-01-27T19:52:11.478Z",
		"__v": 0
	}
]
* Example with author's name filter: GET http://localhost:3000/comments/project/6793016ef6ae53611e32d8eb?authorName=John Doe
*JSON response example:
[
	{
		"_id": "6796be1a03deb939c442d8ad",
		"text": "Este es un comentario de prueba",
		"author": {
			"_id": "679427ca21ee4f36fc56ebf8",
			"name": "John Doe",
			"profilePicture": ""
		},
		"project": "6793016ef6ae53611e32d8eb",
		"commentDate": "2025-01-26T22:58:34.920Z",
		"__v": 0
	}
]
* - projectId is required in params.
* - authorName is optional and comes in query.
*
*/
commentsRouter.get('/project/:projectId', getCommentsByProjectController);

/*
*
* Example: DELETE http://localhost:3000/comments/679133e0e5aab25a1969882d
* - ID of de comment is required.
*
*/
commentsRouter.delete('/:commentId', deleteCommentByIdController);

export default commentsRouter;