package com.grape.tynamoBackend;

import com.grape.tynamoBackend.dao.DaoManager;
import com.grape.tynamoBackend.dao.DaoUtente;
import com.grape.tynamoBackend.domain.Utente;

import java.util.List;

/**
 *
 * @author 20550
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Utente utente1 = Utente.builder()
                .username("PaoloGamer")
                .password("p154")
                .build();
        Utente utente2 = Utente.builder()
                .username("Pier1689")
                .password("h2zbM")
                .build();
        Utente utente3 = Utente.builder()
                .username("BadlandsLoner")
                .password("1234")
                .build();
        
        DaoUtente daoUtente = DaoManager.getDaoUtente();

        // Create
        daoUtente.insert(utente1);
        daoUtente.insert(utente2);
        daoUtente.insert(utente3);
        
        // Read
        Utente utenteTestRead = daoUtente.getByUsername("Pier1689");
        
        // Update
        utente1.setUsername("PaoloGamer64");
        daoUtente.update(utente1);
        Utente utenteTestUpdate = daoUtente.getByUsername("PaoloGamer64");

        // Delete
        daoUtente.remove(utente3);
        List<Utente> elencoUtenti = daoUtente.getAll();
        
        // Print test results
        System.out.println("\nTest Read");
        System.out.println("UTENTI");
        System.out.println("ID\tUSERNAME\tPASSWORD");
        System.out.println(utenteTestRead.getId()+"\t"+utenteTestRead.getUsername()+"\t"+utenteTestRead.getPassword());
        
        System.out.println("\nTest Update");
        System.out.println("UTENTI");
        System.out.println("ID\tUSERNAME\tPASSWORD");
        System.out.println(utenteTestUpdate.getId()+"\t"+utenteTestUpdate.getUsername()+"\t"+utenteTestUpdate.getPassword());
        
        System.out.println("\nTest Read All (after Remove)");
        System.out.println("UTENTI");
        System.out.println("ID\tUSERNAME\tPASSWORD");
        for (Utente utente : elencoUtenti) {
            System.out.println(utente.getId()+"\t"+utente.getUsername()+"\t"+utente.getPassword());
        }
        
        // Cleanup database
        daoUtente.remove(utente1);
        daoUtente.remove(utente2);
    }
    
}