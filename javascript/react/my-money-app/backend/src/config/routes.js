const express = require('express')

module.exports = function(server) {
  //* URL Base for api routes
  const router = express.Router()
  server.get('/', (_, res) => res.json("Hello, if you see this message that means your backend is up and running successfully!!"))
  server.use('/api', router)

  //* Registering Routes
  const billingCycleService = require('../api/billingCycle/BillingCycleService')
  billingCycleService.register(router, '/billing')
}
