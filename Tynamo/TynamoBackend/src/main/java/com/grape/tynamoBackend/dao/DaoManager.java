package com.grape.tynamoBackend.dao;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Persistence;

/**
 *
 * @author 20550
 */
public class DaoManager {
    
    private final static EntityManager em;
    private final static DaoAccount daoAccount;

    static {
        em =  Persistence.createEntityManagerFactory("DEFAULT_PU").createEntityManager();
        daoAccount = new DaoAccount();
    }

    public static EntityManager getEM(){
        return DaoManager.em;
    }

    public static DaoAccount getDaoAccount(){
        return daoAccount;
    }
        
}
