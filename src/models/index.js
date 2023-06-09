const dbConfig = require("../config/db.config.js")

const Sequelize = require("sequelize")
console.log(dbConfig)
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  port: dbConfig.PORT,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users           = require("./user.model.js")(sequelize, Sequelize)
db.follows         = require("./follow.model.js")(sequelize, Sequelize)
db.groups          = require("./group.model.js")(sequelize, Sequelize)
db.isMember        = require("./isMember.model.js")(sequelize, Sequelize)
db.instruments     = require("./instrument.model.js")(sequelize, Sequelize)
db.userInstruments = require("./userInstrument.model.js")(sequelize, Sequelize)
db.announcements   = require("./announcement.model.js")(sequelize, Sequelize)

module.exports = db