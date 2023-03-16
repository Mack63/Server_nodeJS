
const db = require('../db')
class GenreController{
    async createGenre(req, res){
        let {name} = req.body;
        const newGenre = await db.query(`INSERT INTO genre (name) values ($1) RETURNING *`, [name]);
        res.json(newGenre.rows[0]);
    }
    async getOneGenre(req, res){
        let id = req.params.id;
        const oneGenre = await db.query(`SELECT * FROM genre where id = $1`, [id]);
        res.json(oneGenre.rows[0]);
    }
    async getGenres(req, res){
        const genres = await db.query('SELECT * FROM genre');
        res.json(genres.rows);
    }
    async updateGenre(req, res){
        let {id, name} = req.body;
        const updatedGenre = await db.query(`UPDATE genre set name = $1 where id = $2 RETURNING *`, [name, id]);
        res.json(updatedGenre.rows[0]);
    }
    async deleteGenre(req, res){
        let id = req.params.id;
        const deletedGenre = await db.query(`DELETE FROM genre where id = $1`, [id]);
        res.json(deletedGenre.rows[0]);
    }
}
module.exports = new GenreController();