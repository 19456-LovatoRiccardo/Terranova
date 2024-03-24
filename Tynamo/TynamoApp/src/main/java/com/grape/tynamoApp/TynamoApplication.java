package com.grape.tynamoApp;

import com.grape.tynamoBackend.Main;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.grape.tynamoBackend.dao.DaoManager;

/**
 *
 * @author 20550
 */
@SpringBootApplication
public class TynamoApplication {

    public static void main(String[] args) {
        Main.main(args);
        SpringApplication.run(TynamoApplication.class, args);
    }
        
    @Bean
    public DaoManager repo() {
        return new DaoManager();
    }
}
