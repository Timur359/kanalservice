const db = require('../db');

let Data = new Date();
let Year = Data.getFullYear();
let Month = Data.getMonth();
let Day = Data.getDate();

let relevantDate = Day + '.' + Month + '.' + Year;

console.log(relevantDate);

class TableController {
  async getTable(req, res) {
    const table = await db.query('SELECT * FROM tableItem');
    res.json(table.rows);
  }
  async createTableItem(req, res) {
    const { date = relevantDate, name, amount, distance } = req.body;
    const newTableItem = await db.query(
      `INSERT INTO tableItem (date, name, amount, distance) values ($1, $2, $3, $4) RETURNING *`,
      [date, name, amount, distance]
    );
    res.json(newTableItem.rows[0]);
  }
  async updateTodo(req, res) {
    const { id, perfomance } = req.body;
    const todo = await db.query(
      `UPDATE todoItem set perfomance = $1 where id = $2 RETURNING *`,
      [perfomance, id]
    );
    res.json(todo.rows[0]);
  }
  async deleteTableItem(req, res) {
    const { id } = req.params;
    const tableItem = await db.query(
      'DELETE FROM tableItem where id = $1 RETURNING *',
      [id]
    );
    res.json(tableItem);
  }
}

module.exports = new TableController();
