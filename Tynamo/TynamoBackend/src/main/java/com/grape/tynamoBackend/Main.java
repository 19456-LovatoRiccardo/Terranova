package com.grape.tynamoBackend;

import com.grape.tynamoBackend.dao.DaoManager;
import com.grape.tynamoBackend.domain.Anagrafica;
import com.grape.tynamoBackend.domain.Contratto;
import com.grape.tynamoBackend.domain.EE;
import com.grape.tynamoBackend.domain.EEandGAS;
import com.grape.tynamoBackend.domain.GAS;
import com.grape.tynamoBackend.domain.PartitaIVA;
import com.grape.tynamoBackend.domain.Persona;
import com.grape.tynamoBackend.domain.Sede;
import com.opencsv.CSVParser;
import com.opencsv.CSVParserBuilder;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import java.io.FileReader;

/**
 *
 * @author 20550
 */
public class Main {

    public static void main(String[] args) {
        /*
        Account acc1 = Account.builder()
                .email("PaoloGamer")
                .password("p154")
                .build();
        Account acc2 = Account.builder()
                .email("BadlandsLoner")
                .password("1234")
                .build();
        
        DaoAccount daoAccount = DaoManager.getDaoAccount();

        // Create
        daoAccount.insert(acc1);
        daoAccount.insert(acc2);
        
        // Update
        acc2.setEmail("GigioBadlands");
        acc2.setPassword("54321");
        daoAccount.update(acc2);

        // Cleanup database
        daoAccount.remove(acc1);
        daoAccount.remove(acc2);
        */
        
        try {
            CSVParser parser = new CSVParserBuilder().withSeparator(';').build();
            String[] celle;
            
            // Anagrafiche
            FileReader filereader = new FileReader("../../dataset/Anagrafiche.csv"); 
            CSVReader csvReader = new CSVReaderBuilder(filereader).withSkipLines(1).withCSVParser(parser).build();
            while ((celle = csvReader.readNext()) != null) {
                Anagrafica anagrafica;
                switch (celle[4]) {
                    case "":    // Persona
                        anagrafica = Persona.builder()
                                .id(Long.valueOf(celle[0]))
                                .cognome(celle[1])
                                .nome(celle[2])
                                .ragSociale(celle[3])
                                .codiceFiscale(celle[5])
                                .indirizzo(celle[6])
                                .numCivico(Integer.parseInt(celle[7]))
                                .cap(Integer.parseInt(celle[8]))
                                .localita(celle[9])
                                .provincia(celle[10])
                                .nazione(celle[11])
                                .numTelefonico(celle[12])
                                .email(celle[13])
                                .build();
                        break;
                    default:    // PartitaIVA
                        anagrafica = PartitaIVA.builder()
                                .id(Long.valueOf(celle[0]))
                                .ragSociale(celle[3])
                                .partitaIVA(celle[4])
                                .codiceFiscale(celle[5])
                                .indirizzo(celle[6])
                                .numCivico(Integer.parseInt(celle[7]))
                                .cap(Integer.parseInt(celle[8]))
                                .localita(celle[9])
                                .provincia(celle[10])
                                .nazione(celle[11])
                                .numTelefonico(celle[12])
                                .email(celle[13])
                                .build();
                        break;
                }
                DaoManager.getEM().getTransaction().begin();
                DaoManager.getEM().persist(anagrafica);
                DaoManager.getEM().getTransaction().commit();
            }
            
            // Contatti
            filereader = new FileReader("../../dataset/Contatti.csv"); 
            csvReader = new CSVReaderBuilder(filereader).withSkipLines(1).withCSVParser(parser).build();
            while ((celle = csvReader.readNext()) != null) {
                Persona persona = Persona.builder()
                        .cognome(celle[1])
                        .nome(celle[2])
                        .ragSociale(celle[3])
                        .codiceFiscale(celle[5])
                        .indirizzo(celle[6])
                        .numCivico(Integer.parseInt(celle[7]))
                        .cap(Integer.parseInt(celle[8]))
                        .localita(celle[9])
                        .provincia(celle[10])
                        .nazione(celle[11])
                        .numTelefonico(celle[12])
                        .email(celle[13])
                        .build();
                DaoManager.getEM().getTransaction().begin();
                DaoManager.getEM().persist(persona);
                DaoManager.getEM().find(Anagrafica.class, Long.valueOf(celle[0])).setContatto(persona);
                DaoManager.getEM().getTransaction().commit();
            }
            
            // Sedi
            filereader = new FileReader("../../dataset/Sedi.csv"); 
            csvReader = new CSVReaderBuilder(filereader).withSkipLines(1).withCSVParser(parser).build();
            while ((celle = csvReader.readNext()) != null) {
                Sede sede = Sede.builder()
                        .id(Long.valueOf(celle[0]))
                        .anagrafica(DaoManager.getEM().find(Anagrafica.class, Long.valueOf(celle[1])))
                        .descrizione(celle[2])
                        .indirizzo(celle[3])
                        .numCivico(Integer.parseInt(celle[4]))
                        .cap(Integer.parseInt(celle[5]))
                        .localita(celle[6])
                        .provincia(celle[7])
                        .nazione(celle[8])
                        .build();
                DaoManager.getEM().getTransaction().begin();
                DaoManager.getEM().persist(sede);
                DaoManager.getEM().getTransaction().commit();
            }
            
            // Contratti
            filereader = new FileReader("../../dataset/Contratti.csv"); 
            csvReader = new CSVReaderBuilder(filereader).withSkipLines(1).withCSVParser(parser).build();
            while ((celle = csvReader.readNext()) != null) {
                Contratto contratto;
                switch (celle[6]) {
                    case "EE":
                        contratto = EE.builder()
                                .id(Long.valueOf(celle[0]))
                                .sede(DaoManager.getEM().find(Sede.class, Long.valueOf(celle[1])))
                                .dataRichiestaServizi(celle[2])
                                .dataInizioValidita(celle[3])
                                .dataFineValidita(celle[4])
                                .descrizioneOfferta(celle[5])
                                .stato(celle[7])
                                .tipoPagamento(celle[8])
                                .potenzaImp(Float.parseFloat(celle[9]))
                                .potenzaDisp(Float.parseFloat(celle[10]))
                                .energiaAnno(Float.parseFloat(celle[11]))
                                .build();
                        break;
                    case "GAS":
                        contratto = GAS.builder()
                                .id(Long.valueOf(celle[0]))
                                .sede(DaoManager.getEM().find(Sede.class, Long.valueOf(celle[1])))
                                .dataRichiestaServizi(celle[2])
                                .dataInizioValidita(celle[3])
                                .dataFineValidita(celle[4])
                                .descrizioneOfferta(celle[5])
                                .stato(celle[7])
                                .tipoPagamento(celle[8])
                                .gasAnno(Float.parseFloat(celle[12]))
                                .usoCotturaCibi(Boolean.parseBoolean(celle[13]))
                                .produzioneAcquaCalda(Boolean.parseBoolean(celle[14]))
                                .riscaldamentoIndividuale(Boolean.parseBoolean(celle[15]))
                                .usoCommerciale(Boolean.parseBoolean(celle[16]))
                                .build();
                        break;
                    default:    // EE/GAS
                        contratto = EEandGAS.builder()
                                .id(Long.valueOf(celle[0]))
                                .sede(DaoManager.getEM().find(Sede.class, Long.valueOf(celle[1])))
                                .dataRichiestaServizi(celle[2])
                                .dataInizioValidita(celle[3])
                                .dataFineValidita(celle[4])
                                .descrizioneOfferta(celle[5])
                                .stato(celle[7])
                                .tipoPagamento(celle[8])
                                .potenzaImp(Float.parseFloat(celle[9]))
                                .potenzaDisp(Float.parseFloat(celle[10]))
                                .energiaAnno(Float.parseFloat(celle[11]))
                                .gasAnno(Float.parseFloat(celle[12]))
                                .usoCotturaCibi(Boolean.parseBoolean(celle[13]))
                                .produzioneAcquaCalda(Boolean.parseBoolean(celle[14]))
                                .riscaldamentoIndividuale(Boolean.parseBoolean(celle[15]))
                                .usoCommerciale(Boolean.parseBoolean(celle[16]))
                                .build();
                        break;
                }
                DaoManager.getEM().getTransaction().begin();
                DaoManager.getEM().persist(contratto);
                DaoManager.getEM().getTransaction().commit();
            }
        } catch (Exception e) { } 
    }
    
}