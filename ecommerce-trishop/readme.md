* express --no-view foldername.
* npm init.
* npm i.
* create new file .gitignore - write node_modules inside file.
* install packages: npm i bcryptjs body-parser cors express is-empty jsonwebtoken mysql2 sequelize validator.
* sequelize init.
* change config.
* create models.
* create controller.

## Models.
* sequelize model:generate --name admin --attributes username:STRING,email:STRING,fullname:STRING,password:STRING. <br> sequelize db:migrate.
* sequelize model:generate --name user --attributes username:STRING,email:STRING,phone:BIGINT,password:STRING,address:STRING. <br> sequelize db:migrate.
* sequelize model:generate --name logging --attributes idUser:INTEGER,username:STRING,role:ENUM,token:STRING. <br> sequelize db:migrate.
NOTE: Before sequelize db:migrate, goto migrations and add role enum("user", "admin") on logging.