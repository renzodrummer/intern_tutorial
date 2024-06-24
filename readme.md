# Create a nodejs crud application 
# To install 
- expressjs
- nodemon
- sql2
- dotenv
- uuid
- express-joi-validation 
- joi

# Ryan
# User database
# Column names
- ID
- username
- first name
- last name 
- address
- occupation
- birthdate
- marital_status
- sex

# Ray
# Product database
# Column names
- ID 
- productname
- barcode
- description
- expiry_date
- purchase_date
- stock
- vatable
- category
- price

# Ruben
# Transaction database
# Column names
- ID (ref)
- date
- productname
- description
- price
- customername
- transaction
- refundable
- mode_of_payment

# Folder structure

- src
 - validation
  - create.product.validation.js
  - update.product.validation.js
 - controllers
  - product.controller.js
   - get
   - update 
   - delete
   - create
 - routes
  - product.routes.js
 - services
  - product.service.js
 - config
  - db.config
- index.js

# Database
- install sequelize and mysql2

# Authentication and Authorization
# Activities 
- User database 
 - id
 - username 
 - password
 - firstname
 - lastname

# Functions
- Login
 - User validation
 - Provide token
  - token {userid, username}
- Signup
 - username validation
- User authentication (403)(middleware)
 - Check the token if valid
 - Token Expiration 
