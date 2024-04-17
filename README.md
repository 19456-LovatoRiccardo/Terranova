# Terranova
Progetto Terranova Gruppo2 (Lovato - Russo - De Felice - Cremasco) classe 5EI a.s. 2023/24

## Installazione
Richiesti: Un Java IDE, [JDK 21](https://download.oracle.com/java/21/latest/jdk-21_windows-x64_bin.zip), [MariaDB 10.11.7](https://mariadb.org/download/?t=mariadb&p=mariadb&r=10.11.7&os=windows&cpu=x86_64&pkg=msi&m=mva) e [Node.js](https://nodejs.org/en/download).

Installare ``MariaDB 10.11.7`` impostando la ``password di root`` come ``root`` e la ``porta TCP`` come ``3336``.-
Al termine dell'installazione runnare lo script batch ``setupMariaDB.bat`` (usare la password root).
Aprire ``TynamoBackend`` come progetto sull'IDE e buildarlo.
Aprire ``TynamoApp`` come progetto sull'IDE e buildarlo.

Installare ``Node.js`` e runnare il comando  da shell ``npm install`` nella directory ``Tynamo/app``.

## Testing
Runnare ``TynamoApp`` sull'IDE, runnare il comando  da shell ``npm run dev`` nella directory ``Tynamo/app`` e connettersi al link nell'output del comando.
