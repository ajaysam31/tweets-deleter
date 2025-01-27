import express from 'express';
const applicationRouter = express.Router();
import multer from 'multer';

import { scheduleTweetDelete } from '../controllers/scheduleTweetDelete.controller';
import { deleteAllTweets } from '../controllers/deleteAllTweets.controller';
import { showLogs } from '../controllers/showLogs.controller';
import { storage } from '../helpers/uploadFile';
import { unknownRoute } from "../helpers/unknownRoutes";

const upload = multer({ storage: storage });

applicationRouter.get('/schedule-delete', scheduleTweetDelete);
applicationRouter.post('/delete-all', upload.single('file'), deleteAllTweets);
applicationRouter.get('/show-logs', showLogs);
applicationRouter.get('/', unknownRoute);
applicationRouter.use(unknownRoute);

export { applicationRouter };