package com.grape.tynamoBackend.dao;

import com.grape.tynamoBackend.domain.Sede;

import jakarta.persistence.TypedQuery;
import java.util.List;

/**
 *
 * @author 20550
 */
public class DaoSede {
    
    public void insert(Sede riga) {
        DaoManager.getEM().getTransaction().begin();
        DaoManager.getEM().persist(riga);
        DaoManager.getEM().getTransaction().commit();
    }
    
    public List<Sede> getAll() {
        List<Sede> listaRighe;
        DaoManager.getEM().getTransaction().begin();
        TypedQuery tq = DaoManager.getEM().createQuery("SELECT x FROM Sede x", Sede.class);
        listaRighe = tq.getResultList();
        DaoManager.getEM().getTransaction().commit();
        return listaRighe;
    }
    
    public Sede getById(Long id) {
        return DaoManager.getEM().find(Sede.class, id);
    }

    public void update(Sede nuovaRiga) {
        DaoManager.getEM().getTransaction().begin();
        Sede rigaTabella = DaoManager.getEM().find(Sede.class, nuovaRiga.getId());
        rigaTabella = nuovaRiga;
        DaoManager.getEM().getTransaction().commit();
    }
    
    public void remove(Sede riga) {
        DaoManager.getEM().getTransaction().begin();
        DaoManager.getEM().remove(riga);
        DaoManager.getEM().getTransaction().commit();
    }
    
}
