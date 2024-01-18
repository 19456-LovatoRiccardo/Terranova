package com.grape.tynamo.domain;

import com.grape.tynamo.dao.DaoManager;
import com.grape.tynamo.dao.DaoUtente;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

/**
 *
 * @author 20550
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        EntityManager em = Persistence.createEntityManagerFactory("DEFAULT_PU").createEntityManager();

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

        Utente utenteRisultato = daoUtente.getByUsername("PaoloGamer64");
        System.out.println("UTENTI");
        System.out.println("ID\tUSERNAME\tPASSWORD");
        System.out.println(utenteRisultato.getId()+"\t"+utenteRisultato.getUsername()+"\t"+utenteRisultato.getPassword());

        // Delete
        daoUtente.remove(utente3)
        
        TypedQuery tq = null;
        List <Utente> elenco = null;
            
        em.getTransaction().begin();
        tq = em.createQuery("SELECT u FROM Utente u", Utente.class);
        elenco = tq.getResultList();
        em.getTransaction().commit();
        
        System.out.println("UTENTI");
        System.out.println("ID\tUSERNAME\tPASSWORD");
        for (Utente utente : elenco) {
            System.out.println(utente.getId()+"\t"+utente.getUsername()+"\t"+utente.getPassword());
        }
            
        // em.close();
    }
    
}
