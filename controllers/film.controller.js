
const db = require('../db')
class FilmController{
    async createFilm(req, res){
        let {name, productionYear} = req.body;
        const newGenre = await db.query(`INSERT INTO films (name, "productionYear") values ($1, $2) RETURNING *`, [name, productionYear]);
        res.json(newGenre.rows[0]);
    }
    async getOneFilm(req, res){
        let id = req.params.id;
        const oneGenre = await db.query(`SELECT * FROM films where id = $1`, [id]);
        res.json(oneGenre.rows[0]);
    }
    async getFilms(req, res){
        const genres = await db.query('SELECT f.name as film, g.name as genre FROM films f LEFT JOIN film_genre fg ON fg.film_id = f.id LEFT JOIN genre g ON g.id = fg.genre_id')
        res.json(genres.rows);
    }
    async updateFilm(req, res){
        let {id, name, productionYear} = req.body;
        const updatedGenre = await db.query(`UPDATE films set name = $1, "productionYear" = $2 where id = $3 RETURNING *`, [name, productionYear, id]);
        res.json(updatedGenre.rows[0]);
    }
    async deleteFilm(req, res){
        let id = req.params.id;
        const deletedGenre = await db.query(`DELETE FROM films where id = $1`, [id]);
        res.json(deletedGenre.rows[0]);
    }
}
module.exports = new FilmController();