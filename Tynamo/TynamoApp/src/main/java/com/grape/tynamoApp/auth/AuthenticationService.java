package com.grape.tynamoApp.auth;

import com.grape.tynamoApp.config.JwtService;
import com.grape.tynamoBackend.dao.DaoManager;
import com.grape.tynamoBackend.domain.Utente;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 *
 * @author 20550
 */
@Service
@RequiredArgsConstructor
public class AuthenticationService {
    @Autowired
    private final DaoManager DAO;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    
    public AuthenticationResponse register(RegisterRequest request){
        var user = Utente.builder()
                .username(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();
        
        DAO.getDaoUtente().insert(user);
        
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
    
    public AuthenticationResponse authenticate(AuthenticationRequest request){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    request.getEmail(), 
                    request.getPassword()
                )
        );
        
        var user = DAO.getDaoUtente().getByUsername(request.getEmail());
        //        .orElseThrow();
        
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
