package com.grape.tynamo.domain;

import com.grape.tynamo.dao.DaoManager;
import com.grape.tynamo.dao.DaoUtente;
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
        daoUtente.create(utente1);
        daoUtente.create(utente2);
        daoUtente.create(utente3);
        
        // Read
        Utente utenteRisultato = daoUtente.getByUsername("Pier1689");
        System.out.println("UTENTI");
        System.out.println("ID\tUSERNAME\tPASSWORD");
        System.out.println(utenteRisultato.getId()+"\t"+utenteRisultato.getUsername()+"\t"+utenteRisultato.getPassword());
        
        // Update
        utente1.setUsername("PaoloGamer64");
        daoUtente.update(utente1);

        utenteRisultato = daoUtente.getByUsername("PaoloGamer64");
        System.out.println("UTENTI");
        System.out.println("ID\tUSERNAME\tPASSWORD");
        System.out.println(utenteRisultato.getId()+"\t"+utenteRisultato.getUsername()+"\t"+utenteRisultato.getPassword());

        // Delete
        daoUtente.remove(utente3);
        
        List<Utente> elencoUtenti = daoUtente.getAll();
        System.out.println("UTENTI");
        System.out.println("ID\tUSERNAME\tPASSWORD");
        for (Utente utente : elencoUtenti) {
            System.out.println(utente.getId()+"\t"+utente.getUsername()+"\t"+utente.getPassword());
        }
            
        // em.close();
    }
    
}
