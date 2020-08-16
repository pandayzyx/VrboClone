module.exports = {
  "development": {
    "username": "deva",
    "password": process.env.DEV_PASSWORD,
    "database": "vrbo",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.PROD_PASSWORD,
    "database": "vrbo",
    "host": process.env.PROD_HOST,
    "dialect": "mysql"
  }
}
