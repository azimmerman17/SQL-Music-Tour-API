const stages = require('express').Router()
const db = require('../models')
const { Stage, Event } = db

// DEPENDENCIES 
const { Op } = require('sequelize')
   
// FIND ALL stages
stages.get('/', async (req, res) => {
  try {
      const foundStages = await Stage.findAll({
          where: {
              name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` },
          }
      })
      res.status(200).json(foundStages)
  } catch (error) {
      res.status(500).json(error)
  }
})

// FIND A SPECIFIC Stage
stages.get('/:name', async (req, res) => {
  try {
      const foundStage = await Stage.findOne({
          where: { name: req.params.name },
          include: {
            model: Event,
            as: 'events'
          }
      })
      res.status(200).json(foundStage)
  } catch (error) {
      res.status(500).json(error)
      console.log(error)
  }
})

// CREATE A Stage
stages.post('/', async (req, res) => {
  try {
      const newStage = await Stage.create(req.body)
      res.status(200).json({
          message: 'Successfully inserted a new stage',
          data: newStage
      })
  } catch(err) {
      res.status(500).json(err)
  }
})

// UPDATE A STAGE
stages.put('/:id', async (req, res) => {
  try {
      const updatedStages = await Stage.update(req.body, {
          where: {
              stage_id: req.params.id
          }
      })
      res.status(200).json({
          message: `Successfully updated ${updatedStages} stage(s)`
      })
  } catch(err) {
      res.status(500).json(err)
  }
})

// DELETE A STAGE
stages.delete('/:id', async (req, res) => {
  try {
      const deletedStages = await Stage.destroy({
          where: {
              stage_id: req.params.id
          }
      })
      res.status(200).json({
          message: `Successfully deleted ${deletedStages} stages(s)`
      })
  } catch(err) {
      res.status(500).json(err)
  }
})

module.exports = stages