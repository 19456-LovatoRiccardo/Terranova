package com.grape.tynamo.dao;

import com.grape.tynamo.domain.Utente;
import java.util.List;
import javax.persistence.TypedQuery;
import javax.persistence.Query;

/**
 *
 * @author 20550
 */
public class DaoUtente {
    
    public void insert(Utente utente) {
        DaoManager.getEM().getTransaction().begin();
        DaoManager.getEM().persist(utente);
        DaoManager.getEM().getTransaction().commit();
    }
    
    public List<Utente> getAll() {
        List<Utente> listaUtenti = null;
        DaoManager.getEM().getTransaction().begin();
        TypedQuery tq = DaoManager.getEM().createQuery("SELECT u FROM Utente u", Utente.class);
        listaUtenti = tq.getResultList();
        DaoManager.getEM().getTransaction().commit();
        return listaUtenti;
    }
    
    public Utente getByUsername(String username) {
        DaoManager.getEM().getTransaction().begin();
        TypedQuery<Utente> tq = DaoManager.getEM().createQuery("SELECT u FROM Utente u WHERE u.username=:username", Utente.class);
        tq.setParameter("username", username);
        Utente utente = tq.getSingleResult();
        DaoManager.getEM().getTransaction().commit();
        return utente;
    }

    public void update(Utente utente) {
        DaoManager.getEM().getTransaction().begin();
        /*
        Query query = DaoManager.getEM().createQuery("UPDATE Utente SET username=\'?1\', password=\'?2\' WHERE id=?3");
        query.setParameter(1, utente.getUsername());
        query.setParameter(2, utente.getPassword());
        query.setParameter(3, utente.getId());
        */
        Query query = DaoManager.getEM().createQuery("UPDATE Utente SET username=\'" + utente.getUsername() +
                "\', password=\'" + utente.getPassword() + "\' WHERE id=" + utente.getId());
        query.executeUpdate();
        DaoManager.getEM().getTransaction().commit();
    }

    public void remove(Utente utente) {
        DaoManager.getEM().getTransaction().begin();
        DaoManager.getEM().remove(utente);
        DaoManager.getEM().getTransaction().commit();
    }
}
