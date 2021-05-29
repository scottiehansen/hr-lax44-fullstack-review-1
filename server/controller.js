const connection = require('../db/index.js');

const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students
      var queryStr = `select students.id, students.name, images.imgurl from students inner join images on students.id = images.id`;

      connection.query(queryStr, (err, results) => {
        if (err) {
          res.status(400).send(err)
        } else {
          res.status(200).send(results)
        }
      })

    },
    postName: function (req, res) {
      // TODO: add your code here to add a student's name
      let { name } = req.body;

      let queryStr = `insert into students (name) values ("${name}")`

      connection.query(queryStr, (err) => {
        err ? res.status(404).send(err) : res.status(200).send('Hell yeah.')
      })

    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name

      let { name } = req.body;
      let { id } = req.params;

      let queryStr = `update students set name = "${ name }" where id = ${id} `

      connection.query(queryStr, (err) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send('Student name updated!')
        }
      })
    }
  },

  images: {
    postImg: function (req, res) {
      // TODO: add your code here to add a student image
      let { image } = req.body;

      let queryStr = `insert into images (imgurl) values ("${image}")`

      connection.query(queryStr, (err) => {
        err ? res.status(404).send(err) : res.status(200).send('chill')
      })
    }
  }
};

module.exports = controller