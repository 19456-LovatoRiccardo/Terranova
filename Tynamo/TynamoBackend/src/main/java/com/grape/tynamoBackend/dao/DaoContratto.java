package com.grape.tynamoBackend.dao;

import com.grape.tynamoBackend.domain.Contratto;

import jakarta.persistence.TypedQuery;
import java.util.List;

/**
 *
 * @author 20550
 */
public class DaoContratto {
    
    public void insert(Contratto riga) {
        DaoManager.getEM().getTransaction().begin();
        DaoManager.getEM().persist(riga);
        DaoManager.getEM().getTransaction().commit();
    }
    
    public List<Contratto> getAll() {
        List<Contratto> listaRighe;
        DaoManager.getEM().getTransaction().begin();
        TypedQuery tq = DaoManager.getEM().createQuery("SELECT x FROM Contratto x", Contratto.class);
        listaRighe = tq.getResultList();
        DaoManager.getEM().getTransaction().commit();
        return listaRighe;
    }
    
    public Contratto getById(Long id) {
        return DaoManager.getEM().find(Contratto.class, id);
    }

    public void update(Contratto nuovaRiga) {
        DaoManager.getEM().getTransaction().begin();
        Contratto rigaTabella = DaoManager.getEM().find(Contratto.class, nuovaRiga.getId());
        rigaTabella = nuovaRiga;
        DaoManager.getEM().getTransaction().commit();
    }
    
    public void remove(Contratto riga) {
        DaoManager.getEM().getTransaction().begin();
        DaoManager.getEM().remove(riga);
        DaoManager.getEM().getTransaction().commit();
    }
    
}
