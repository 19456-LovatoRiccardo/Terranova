package com.grape.tynamoBackend.dao;

import com.grape.tynamoBackend.domain.Anagrafica;

import jakarta.persistence.TypedQuery;
import java.util.List;

/**
 *
 * @author 20550
 */
public class DaoAnagrafica {
    
    public void insert(Anagrafica riga) {
        DaoManager.getEM().getTransaction().begin();
        DaoManager.getEM().persist(riga);
        DaoManager.getEM().getTransaction().commit();
    }
    
    public List<Anagrafica> getAll() {
        List<Anagrafica> listaRighe;
        DaoManager.getEM().getTransaction().begin();
        TypedQuery tq = DaoManager.getEM().createQuery("SELECT x FROM Anagrafica x", Anagrafica.class);
        listaRighe = tq.getResultList();
        DaoManager.getEM().getTransaction().commit();
        return listaRighe;
    }
    
    public Anagrafica getById(Long id) {
        return DaoManager.getEM().find(Anagrafica.class, id);
    }

    public void update(Anagrafica nuovaRiga) {
        DaoManager.getEM().getTransaction().begin();
        Anagrafica rigaTabella = DaoManager.getEM().find(Anagrafica.class, nuovaRiga.getId());
        rigaTabella = nuovaRiga;
        DaoManager.getEM().getTransaction().commit();
    }
    
    public void remove(Anagrafica riga) {
        DaoManager.getEM().getTransaction().begin();
        DaoManager.getEM().remove(riga);
        DaoManager.getEM().getTransaction().commit();
    }
    
    public Anagrafica getByEmail(String email) {
        Anagrafica account = null;
        DaoManager.getEM().getTransaction().begin();
        try {
            TypedQuery<Anagrafica> tq = DaoManager.getEM().createQuery("SELECT a FROM Anagrafica a WHERE a.email=:email", Anagrafica.class);
            tq.setParameter("email", email);
            account = tq.getSingleResult();
        } finally {
            DaoManager.getEM().getTransaction().commit();
        }
        return account;
    }
    
}
