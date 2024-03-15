package com.grape.tynamoApp.config;

import com.grape.tynamoBackend.dao.DaoManager;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 *
 * @author 20550
 */
@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    @Autowired
    private final DaoManager DAO;
    
    @Bean
    public UserDetailsService userDetailsService() {
        return username -> DAO.getDaoAccount().getByEmail(username);
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
//                .orElseThrow(()-> new UsernameNotFoundException("User not found"));
    }
    
    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
// import org.springframework.boot.web.servlet.FilterRegistrationBean;
// import org.springframework.security.core.userdetails.UserDetails;
//    @Bean
//    public FilterRegistrationBean<RequestResponseLoggingFilter> loggingFilter(){
//        FilterRegistrationBean<RequestResponseLoggingFilter> registrationBean 
//          = new FilterRegistrationBean<>();
//
//        registrationBean.setFilter(new RequestResponseLoggingFilter());
//        registrationBean.addUrlPatterns("/api/v1/auth/*");
//        registrationBean.setOrder(1);
//        return registrationBean;    
//    }
}
