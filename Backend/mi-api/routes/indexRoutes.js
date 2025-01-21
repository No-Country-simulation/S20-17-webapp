import express from "express";
const router = express.Router();

/* GET Main Path */
router.get('/', function(req, res, next) {
  res.json({message: 'Welcome to the API'});
});

export default router;
