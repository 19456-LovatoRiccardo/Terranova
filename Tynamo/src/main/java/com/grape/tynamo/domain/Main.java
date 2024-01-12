/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.grape.tynamo.domain;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

/**
 *
 * @author 19456
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        EntityManager em = Persistence.createEntityManagerFactory("DEFAULT_PU").createEntityManager();

        Utente utente1 = new Utente();
        Utente utente2 = new Utente();
        Utente utente3 = new Utente();
        Utente utente4 = new Utente();
        Utente utente5 = new Utente();

        em.getTransaction().begin();
        em.persist(utente1);
        em.persist(utente2);
        em.persist(utente3);
        em.persist(utente4);
        em.persist(utente5);
        em.getTransaction().commit();
        
        TypedQuery tq = null;
	List <Utente> elenco = null;
		
	em.getTransaction().begin();
	tq = em.createQuery("SELECT u FROM Utente u", Utente.class);
	elenco = tq.getResultList();
	em.getTransaction().commit();
	
	System.out.println("UTENTI");
	System.out.println("ID");
	for (Utente utente : elenco) {
		System.out.println(utente.getId());
	}
        
        em.close();
    }
    
}
