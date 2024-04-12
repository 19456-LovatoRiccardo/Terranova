package com.grape.tynamoApp.auth;

import com.grape.tynamoApp.config.JwtService;
import com.grape.tynamoBackend.dao.DaoManager;
import com.grape.tynamoBackend.domain.Account;
import com.grape.tynamoBackend.domain.Persona;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    
    public ResponseEntity<?> register(RegisterRequest request) {
        if (DAO.getDaoAccount().getByEmail(request.getEmail()) != null || DAO.getDaoAnagrafica().getByEmail(request.getEmail()) != null) {
            var responseBuilder = ResponseEntity.badRequest();
            return responseBuilder.body("Email already exists");
        }
        
        var anagrafica = Persona.builder()
                .cognome(request.getCognome())
                .nome(request.getNome())
                .ragSociale(request.getRagSociale())
                .codiceFiscale(request.getCodiceFiscale())
                .indirizzo(request.getIndirizzo())
                .numCivico(request.getNumCivico())
                .cap(request.getCap())
                .localita(request.getLocalita())
                .provincia(request.getProvincia())
                .nazione(request.getNazione())
                .numTelefonico(request.getNumTelefonico())
                .email(request.getEmail())
                .build();
        
        var account = Account.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .anagrafica(anagrafica)
                .build();
        
        DAO.getDaoAnagrafica().insert(anagrafica);
        DAO.getDaoAccount().insert(account);
        
        var jwtToken = jwtService.generateToken(account);
        var response = AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
        return ResponseEntity.ok(response);
    }
    
    public ResponseEntity<?> authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    request.getEmail(), 
                    request.getPassword()
                )
        );
        
        var user = DAO.getDaoAccount().getByEmail(request.getEmail());
        
        var jwtToken = jwtService.generateToken(user);
        var response = AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
        return ResponseEntity.ok(response);
    }
}
