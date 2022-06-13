const fs = require('fs-extra');

fs.emptydirSync('./first_folder'); //Создать папку;
fs.ensureFileSync('./first_folder/first_file.txt'); //Создать текстовый файл;

fs.emptydirSync('./second_folder'); //создать вторую папку;
fs.copySync("./first_folder/first_file.txt", './second_folder/first_file.txt'); //переместить файл из первой папки во вторую;

fs.emptydirSync('./third_folder'); //Создать третью папку;
fs.copySync("./second_folder/first_file.txt", './third_folder/first_file.txt'); //Скопировать файл из второй папки в третью;

fs.removeSync('./first_folder/first_file.txt');
fs.removeSync('./second_folder/first_file.txt');
fs.removeSync('./third_folder/first_file.txt'); //Удалить файлы;

fs.removeSync('./first_folder');
fs.removeSync('./second_folder');
fs.removeSync('./third_folder');  //Удалить все папки;
