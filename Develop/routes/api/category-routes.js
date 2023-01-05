const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// As defined by /routes/api/index.js exporting to /routes/index.js, which then exports to server

// status codes:
// 404 - not found
// 200 - success
// 400 - bad request

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const data = await Category.findAll({
      include: [{ model: Product }]
    });
    if (!data) {
      res.status(404).json({message: 'No categories to display'});
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const data = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!data) {
      res.status(404).json({message: 'No category by that ID'});
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const data = await Category.create(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const data = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!data[0]) {
      res.status(404).json({message: 'Update failed.  ID does not exist or was already created'});
      return;
    }
    res.status(200).json({message: 'Update successful!'});
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const data = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!data) {
      res.status(404).json({message: 'Delete failed - ID does not exist.'});
      return;
    }
    res.status(200).json({message: 'Delete successful!'});
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
