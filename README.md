# Automation1062_Task5
## Mysql setup
### Install mysql server
$ sudo apt-get update <br />
$ sudo apt-get install mysql-server mysql-client <br />
(Password for mysql root will be required.) <br />
<br />

### Modify config file
$ sudo nano /etc/mysql/my.cnf <br />
Enable remote connection: comment out following line (47) <br />
bind-address = 127.0.0.1 <br />
<br />

### Login by Raspberry Pi command line
$ mysql -u root -p <br />
Enter password: (the one we just set) <br />
<br />

### Modify remote connection privileges
(username: 'root', host: local computer IP) <br />
mysql> GRANT ALL PRIVILEGES ON *.* TO 'username'@'host' IDENTIFIED BY 'password'; <br />
mysql> FLUSH PRIVILEGES; <br />
<br />

### Login to Raspberry Pi's Mysql server from LOCAL computer
![alt text](./src/local.jpg) <br />
$ mysql -u root –h 192.168.XXX.XXX –p (Raspberry pi IP) <br />
<br />

## Task setup
### Insert test data
![alt text](./src/testdata.jpg) <br />
mysql> CREATE DATABASE Task5; <br />
mysql> USE Task5; <br />
mysql> CREATE TABLE Family (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT(255), birthday DATE, job VARCHAR(255)); <br />
mysql> INSERT INTO Family (name, age, birthday, job) VALUES ('James', 58, '1959-05-23', 'Doctor'), ('Tiffany', 55, '1962-08-30', 'Artist'), ('Angela', 25, '1992-11-28', 'Graduate student'), ('Albert', 22, '1996-01-04', 'University student'), ('Alice', 10, '2008-01-02', 'Pet'); <br />

## Local computer side
### npm installation tool
npm installation tool is already installed when node.js is. <br />
![alt text](./src/npm.jpg) <br />
open cmd.exe <br />
npm install express <br />
npm install mysql <br />
 <br />
### Run a node.js program
![alt text](./src/runjs.jpg) <br />
node task5.js
 <br />
### View html page in browser
![alt text](./src/html.jpg) <br />
Open web browser, and in the url bar type in: localhost:8080 <br />
 <br />
