const Router = require('express');
const router = new Router();
const TableController = require('../controller/table.controller');

router.get('/table', TableController.getTable);
router.post('/table', TableController.createTableItem);
router.delete('/table/:id', TableController.deleteTableItem);

module.exports = router;
