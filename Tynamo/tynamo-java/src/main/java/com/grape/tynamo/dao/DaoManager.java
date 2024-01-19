package com.grape.tynamo.dao;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;

/**
 *
 * @author 20550
 */
public class DaoManager {
    
    private final static EntityManager em;
    private final static DaoUtente daoUtente;

    static {
        em =  Persistence.createEntityManagerFactory("DEFAULT_PU").createEntityManager();
        daoUtente = new DaoUtente();
    }

    public static EntityManager getEM(){
        return DaoManager.em;
    }

    public static DaoUtente getDaoUtente(){
        return daoUtente;
    }
        
}
