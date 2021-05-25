const router = require('express').Router();
const controller = require('./controller.js');

router
.route('/students')
.get(controller.students.getStudents)
.post(controller.students.postName)

router
.route('/students/:id')
.put(controller.students.updateName)

router
.route('/images')
.post(controller.images.postImg)


module.exports = router;