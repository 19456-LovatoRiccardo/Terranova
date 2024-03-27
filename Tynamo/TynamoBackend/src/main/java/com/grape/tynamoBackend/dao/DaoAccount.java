package com.grape.tynamoBackend.dao;

import com.grape.tynamoBackend.domain.Account;

import jakarta.persistence.TypedQuery;
import java.util.List;

/**
 *
 * @author 20550
 */
public class DaoAccount {
    
    public void insert(Account riga) {
        DaoManager.getEM().getTransaction().begin();
        DaoManager.getEM().persist(riga);
        DaoManager.getEM().getTransaction().commit();
    }
    
    public List<Account> getAll() {
        List<Account> listaRighe;
        DaoManager.getEM().getTransaction().begin();
        TypedQuery tq = DaoManager.getEM().createQuery("SELECT x FROM Account x", Account.class);
        listaRighe = tq.getResultList();
        DaoManager.getEM().getTransaction().commit();
        return listaRighe;
    }
    
    public Account getById(Long id) {
        return DaoManager.getEM().find(Account.class, id);
    }
    
    public void update(Account nuovaRiga) {
        DaoManager.getEM().getTransaction().begin();
        Account rigaTabella = DaoManager.getEM().find(Account.class, nuovaRiga.getId());
        rigaTabella = nuovaRiga;
        DaoManager.getEM().getTransaction().commit();
    }
    
    public void remove(Account riga) {
        DaoManager.getEM().getTransaction().begin();
        DaoManager.getEM().remove(riga);
        DaoManager.getEM().getTransaction().commit();
    }
    
    public Account getByEmail(String email) {
        Account account = null;
        DaoManager.getEM().getTransaction().begin();
        try {
            TypedQuery<Account> tq = DaoManager.getEM().createQuery("SELECT a FROM Account a WHERE a.email=:email", Account.class);
            tq.setParameter("email", email);
            account = tq.getSingleResult();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            DaoManager.getEM().getTransaction().commit();
        }
        return account;
    }
    
}
