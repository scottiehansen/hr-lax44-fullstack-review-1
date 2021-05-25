const db = require('../db/');

const controller = {
  students: {
    getStudents: function (req, res) {
      let queryStr = `select students.id, name, imgurl from students \
                      inner join images \
                      on students.id = images.id`;

      db.query(queryStr, (err, results) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(results)
        }
      })
    },
    postName: function (req, res) {
      let { name } = req.body;
      let queryStr = `insert into students (name) values ("${name}")`;

      db.query(queryStr, (err, results) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(`Success!`)
        }
      })

    },
    updateName: function (req, res) {
      let { newName } = req.body;
      let { id } = req.params;

      let queryStr = `update students set name = "${newName}" where id = ${id} `

      db.query(queryStr, (err, results) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(`Success!`)
        }
      })
    }
  },

  images: {
    postImg: function (req, res) {
      let { imgurl } = req.body;
      let queryStr = `insert into images (imgurl) values ("${ imgurl }")`

      db.query(queryStr, (err, results) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(`Success!`)
        }
      })
    }
  }
};

module.exports = controller