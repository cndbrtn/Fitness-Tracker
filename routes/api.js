const { Workout } = require('../models');
const router = require('express').Router();

router.get('/api/workouts', (req, res) => {
    Workout.find().then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        console.log(err);
    })
});

router.get('/api/workouts/:id', ({ body }, res) => {
    console.log('body.id', body.id);
    Workout.find({ _id: body.id }).then(dbWorkout => {
        res.json(dbWorkout);
    })
});

router.get('/api/workouts/range', (req, res) => {
    Workout.find().sort({ day: 1 }).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        console.log(err);
    })
})

module.exports = router;