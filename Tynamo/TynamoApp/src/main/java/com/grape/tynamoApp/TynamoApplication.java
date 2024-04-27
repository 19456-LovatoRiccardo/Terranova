package com.grape.tynamoApp;

import com.grape.tynamoBackend.Main;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.grape.tynamoBackend.dao.DaoManager;
import com.grape.tynamoBackend.domain.Account;
import com.grape.tynamoBackend.domain.Anagrafica;
import java.util.List;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 *
 * @author 20550
 */
@SpringBootApplication
public class TynamoApplication {

    public static void main(String[] args) {
        Main.main(args);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        
        List<Anagrafica> listaAnagrafiche = DaoManager.getDaoAnagrafica().getAll();
        for (Anagrafica anagrafica : listaAnagrafiche) {
            Account account = Account.builder()
                    .email(anagrafica.getEmail())
                    .password(passwordEncoder.encode(anagrafica.getEmail()))
                    .anagrafica(anagrafica)
                    .build();
            DaoManager.getDaoAccount().insert(account);
        }
        
        SpringApplication.run(TynamoApplication.class, args);
    }
        
    @Bean
    public DaoManager repo() {
        return new DaoManager();
    }
}
