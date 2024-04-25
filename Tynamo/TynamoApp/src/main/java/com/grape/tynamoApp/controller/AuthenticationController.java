package com.grape.tynamoApp.controller;

import com.grape.tynamoApp.auth.AuthenticationRequest;
import com.grape.tynamoApp.auth.AuthenticationService;
import com.grape.tynamoApp.auth.RegisterPrivatoRequest;
import com.grape.tynamoApp.auth.RegisterAziendaRequest;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author 20550
 */
@CrossOrigin
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    @Autowired
    private final AuthenticationService service;
    
    @PostMapping("/register/privato")
    public ResponseEntity<?> registerPrivato(@RequestBody RegisterPrivatoRequest request) {
        return service.registerPrivato(request);
    }
    @PostMapping("/register/azienda")
    public ResponseEntity<?> registerAzienda(@RequestBody RegisterAziendaRequest request) {
        return service.registerAzienda(request);
    }
    
    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest request) {
        return service.authenticate(request);
    }
    
    @GetMapping("/logout")
    public ResponseEntity<?> logoutUser() {
        SecurityContextHolder.clearContext();
        return ResponseEntity.ok("Logout successful");
    }
}
