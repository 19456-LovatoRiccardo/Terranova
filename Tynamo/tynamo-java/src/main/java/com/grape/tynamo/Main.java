package com.grape.tynamo;

import com.grape.tynamo.dao.DaoManager;
import com.grape.tynamo.dao.DaoUtente;
import com.grape.tynamo.domain.Utente;

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
        Utente utente1 = new Utente("PaoloGamer", "p154");
        Utente utente2 = new Utente("Pier1689", "h2zbM");
        Utente utente3 = new Utente("BadlandsLoner", "1234");
        
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
    }
    
}