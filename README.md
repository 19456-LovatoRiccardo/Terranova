# Terranova
Progetto Terranova Gruppo2 (Lovato - Russo - De Felice - Cremasco) classe 5EI a.s. 2023/24

## Installazione
Richiesti: Netbeans con [JDK 21](https://download.oracle.com/java/21/latest/jdk-21_windows-x64_bin.zip) e [MariaDB 10.11.7](https://mariadb.org/download/?t=mariadb&p=mariadb&r=10.11.7&os=windows&cpu=x86_64&pkg=msi&m=mva)

Installare ``MariaDB 10.11.7`` impostando la ``password di root`` come ``root`` e la ``porta TCP`` come ``3336``.
Al termine dell'installazione runnare lo script batch ``setupMariaDB.bat``.
Aprire ``TynamoBackend`` come progetto su Netbeans e buildarlo.
Aprire ``TynamoApp`` come progetto su Netbeans e buildarlo.

## Testing
Semplicemente runnare ``TynamoApp`` e connettersi all'indirizzo ``http://localhost:9091``.
