import express from 'express';
const applicationRouter = express.Router();
import multer from 'multer';

import { scheduleDelete } from '../controllers/scheduleTweetDelete.controller';
import { deleteAll } from '../controllers/deleteAllTweets.controller';
import { unknownRoute } from "../helpers/unknownRoutes";

const upload = multer({ destination: './uploads' })

applicationRouter.get('/schedule-delete', scheduleDelete);
applicationRouter.post('/delete-all', upload.single('file'), deleteAll);
applicationRouter.use(unknownRoute);

export { applicationRouter };