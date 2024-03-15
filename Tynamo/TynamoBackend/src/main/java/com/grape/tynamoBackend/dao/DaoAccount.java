package com.grape.tynamoBackend.dao;

import com.grape.tynamoBackend.domain.Account;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;
import java.util.List;

/**
 *
 * @author 20550
 */
public class DaoAccount {
    
    public void insert(Account account) {
        DaoManager.getEM().getTransaction().begin();
        DaoManager.getEM().persist(account);
        DaoManager.getEM().getTransaction().commit();
    }
    
    public List<Account> getAll() {
        List<Account> listaAccount = null;
        DaoManager.getEM().getTransaction().begin();
        TypedQuery tq = DaoManager.getEM().createQuery("SELECT a FROM Account a", Account.class);
        listaAccount = tq.getResultList();
        DaoManager.getEM().getTransaction().commit();
        return listaAccount;
    }
    
    public Account getById(Long id) {
        Account account = null;
        DaoManager.getEM().getTransaction().begin();
        try {
            TypedQuery<Account> tq = DaoManager.getEM().createQuery("SELECT a FROM Account a WHERE a.id=:id", Account.class);
            tq.setParameter("id", id);
            account = tq.getSingleResult();
        } catch(Exception e) { // non mostrare errore in output
        } finally {
            DaoManager.getEM().getTransaction().commit();
        }
        return account;
    }
    
    public Account getByEmail(String email) {
        Account account = null;
        DaoManager.getEM().getTransaction().begin();
        try {
            TypedQuery<Account> tq = DaoManager.getEM().createQuery("SELECT a FROM Account a WHERE a.email=:email", Account.class);
            tq.setParameter("email", email);
            account = tq.getSingleResult();
        } catch(Exception e) { // non mostrare errore in output
        } finally {
            DaoManager.getEM().getTransaction().commit();
        }
        return account;
    }

    public void update(Account account) {
        DaoManager.getEM().getTransaction().begin();
        Account rigaTabella = DaoManager.getEM().find(Account.class, account.getId());
        rigaTabella.setEmail(account.getEmail());
        rigaTabella.setPassword(account.getPassword());
        rigaTabella.setAnagrafica(account.getAnagrafica());
        DaoManager.getEM().getTransaction().commit();
    }

    public void remove(Account account) {
        DaoManager.getEM().getTransaction().begin();
        DaoManager.getEM().remove(account);
        DaoManager.getEM().getTransaction().commit();
    }
    
}
