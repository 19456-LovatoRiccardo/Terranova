# Terranova
Progetto Terranova Gruppo2 (Lovato - Russo - De Felice - Cremasco) classe 5EI a.s. 2023/24

## Installazione
Richiesti: Un Java IDE con [JDK 21](https://download.oracle.com/java/21/latest/jdk-21_windows-x64_bin.zip) e [MariaDB 10.11.7](https://mariadb.org/download/?t=mariadb&p=mariadb&r=10.11.7&os=windows&cpu=x86_64&pkg=msi&m=mva)

Installare ``MariaDB 10.11.7`` impostando la ``password di root`` come ``root`` e la ``porta TCP`` come ``3336``.
Al termine dell'installazione runnare lo script batch ``setupMariaDB.bat`` (usare la password root).
Aprire ``TynamoBackend`` come progetto sull'IDE e buildarlo.
Aprire ``TynamoApp`` come progetto sull'IDE e buildarlo.

## Testing
Semplicemente runnare ``TynamoApp`` sull'IDE e aprire il file ``Tynamo/app/test.html``.
