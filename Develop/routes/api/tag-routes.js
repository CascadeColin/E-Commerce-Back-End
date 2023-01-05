const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const data = await Tag.findAll({
      include: [{ model: Product }]
    });
    if (!data) {
      res.status(404).json({message: 'No tags to display'});
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const data = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!data) {
      res.status(404).json({message: 'No tags to display'});
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const data = await Tag.create(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const data = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
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
  // delete on tag by its `id` value
  try {
    const data = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!data) {
      res.status(404).json({message: 'Tag does not exist at this ID.'});
      return;
    }
    res.status(200).json({message: 'Delete successful!'});
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
