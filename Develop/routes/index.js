const router = require('express').Router();
const apiRoutes = require('./api');

// tells the server to use apiRoutes at the "/api" URL subdirectory
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!  Check your API.</h1>")
});

module.exports = router;