MERN (MongoDB, express, react and node):
* Mongo: noSQL database.
* Mongo: Obeject - colections - documents -data.
* Express: Web server.

## setup mongodb.
* go to mongodb manual installation - install mongoDB comunity edition - linux - ubuntu.
* sudo apt install -y mongodb .
* sudo systemctl status mongodb.
* mongo --eval 'db.runCommand({ connectionStatus: 1 })'.
* sudo service mongodb start (turn on mongoDB server).
* sudo service mongodb stop (turn off mongodb server).
* sudo service mongodb restart (restart mongodb server).
* sudo systemctl status mongodb (see mongodb status).
* press q to quit from mongodb status.

## make mongodb dbpath (terminal).
* sudo service mongodb stop (turn off the mongo server).
* mkdir -p cobamongo/db (make new directory for save database document).
* mongod --dbpath cobamongo/db/ (run the server).
* sudo service mongodb start.
* type "mongo" on terminal.
* db.
* show dbs.
* use tokobuku ( to create and use database).
* create database collections: db.createCollections("nama_koleksi").
* insert (db.<collection_name>.insert(<data>)) example:
```javascript
db.buku.insert({
    judul: "Belajar MongoDB",
    sinopsis: "Panduan MongoDB untuk Pemula",
    pengarang: "Petani Kode"
})
```
note: collection is the collection we want will create and data is place to save our collection in JSON format.
* to see how many insert data using: db.buku.count().
* show database insert data (db.<collection_name>.find()): db.buku.find().
* we can add prettier: (db.<collection_name>.find().pretty()): db.buku.find().pretty().
* find book price: db.buku.find({ harga: 98000 }).
* change database insert data (db.<koleksi>.update(<query>, <data baru>)). <br>
Note: query is keywords to change data, same with SQL we use WHERE. data baru is mean the new data.
* delete database data: db.<koleksi>.remove(<query>).
* delete database collection: db.<koleksi>.drop();
* delete database: db.dropDatabase();.

## Mongodb Robo 3T.
* install robo 3T.
* mongodb windows connections - press create.
* write connection name - press test - close - save - connect.