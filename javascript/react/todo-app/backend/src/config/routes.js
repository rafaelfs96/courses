const express = require('express')

module.exports = function(server) {
  // API Routes
  const router = express.Router()
  server.get('/', (_, res) => res.json('If you\'re seeing this, it means that your backend is up and running!!'))
  server.use('/api', router)

  // Todo Routes
  const todoService = require('../api/todo/todoService')
  todoService.register(router, '/todos')
}
