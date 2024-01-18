package com.grape.tynamo.dao;

import com.grape.tynamo.domain.Utente;
import javax.persistence.TypedQuery;

/**
 *
 * @author 20550
 */
public class DaoUtente {
    
    public void create(Utente utente){
        DaoManager.getEM().getTransaction().begin();
        DaoManager.getEM().persist(utente);
        DaoManager.getEM().getTransaction().commit();
    }
     
    public Utente getByUsername(String username){
        Utente utente = null;
        TypedQuery<Utente> tq;
        DaoManager.getEM().getTransaction().begin();

        tq = DaoManager.getEM().createQuery("SELECT u FROM Utente u WHERE u.username=:username", Utente.class);
        tq.setParameter("username", username);
        utente = tq.getSingleResult();
        DaoManager.getEM().getTransaction().commit();
        return utente;
    }
    
}
