@echo off
set MYSQL_HOME=C:\Program Files\MariaDB 10.11\data\
set PATH=C:\Program Files\MariaDB 10.11\bin\;%PATH%
mariadb -u root -p -e "CREATE DATABASE terranova; CREATE USER app@localhost IDENTIFIED BY 'app'; GRANT ALL PRIVILEGES ON terranova.* TO app@localhost;"
exit