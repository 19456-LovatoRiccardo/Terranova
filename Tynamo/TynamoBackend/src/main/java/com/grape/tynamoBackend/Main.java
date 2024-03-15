package com.grape.tynamoBackend;

import com.grape.tynamoBackend.dao.DaoAccount;
import com.grape.tynamoBackend.dao.DaoManager;
import com.grape.tynamoBackend.domain.Account;

/**
 *
 * @author 20550
 */
public class Main {

    public static void main(String[] args) {
        Account acc1 = Account.builder()
                .email("PaoloGamer")
                .password("p154")
                .build();
        Account acc2 = Account.builder()
                .email("BadlandsLoner")
                .password("1234")
                .build();
        
        DaoAccount daoAccount = DaoManager.getDaoAccount();

        // Create
        daoAccount.insert(acc1);
        daoAccount.insert(acc2);
        
        // Update
        acc2.setEmail("GigioBadlands");
        acc2.setPassword("54321");
        daoAccount.update(acc2);

        // Cleanup database
        daoAccount.remove(acc1);
        daoAccount.remove(acc2);
    }
    
}