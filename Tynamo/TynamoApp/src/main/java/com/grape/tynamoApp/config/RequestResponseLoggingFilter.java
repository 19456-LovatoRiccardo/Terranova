package com.grape.tynamoApp.config;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 *
 * @author 20550
 */
@Component
@Order(1)
public class RequestResponseLoggingFilter implements Filter {

    @Override
    public void doFilter(
        ServletRequest request, 
        ServletResponse response, 
        FilterChain chain) throws IOException, ServletException {
 
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;
        System.out.println("Logging Request " + 
                            req.getMethod() + " : " +
                            req.getRequestURI());
        System.out.println("Logging Response : " +
                            res.getContentType());
//        LOG.info(
//          "Logging Request  {} : {}", req.getMethod(), 
//          req.getRequestURI());
        chain.doFilter(request, response);
        
//        LOG.info(
//          "Logging Response :{}", 
//          res.getContentType());
    }
}


