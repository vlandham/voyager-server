import { recommend } from 'compassql/build/src/recommend';
import * as express from 'express';

import { serialize } from './utils';

const router = express.Router();

router.route('/').get((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.render('index', {
    title: 'Voyager-Server'
  });
});


router.route('/recommend').post((req: express.Request, res: express.Response) => {
  const query = req.body.query;
  const schema = req.body.schema;
  const modelGroup = recommend(query, schema).result;

  console.log(JSON.stringify(modelGroup));
  res.status(200).send(serialize(modelGroup));
});

export = router;
