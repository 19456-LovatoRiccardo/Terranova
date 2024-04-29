package com.grape.tynamoApp.auth;

import com.grape.tynamoApp.config.JwtService;
import com.grape.tynamoBackend.dao.DaoManager;
import com.grape.tynamoBackend.domain.Account;
import com.grape.tynamoBackend.domain.Persona;
import com.grape.tynamoBackend.domain.PartitaIVA;

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
    
    public ResponseEntity<?> registerPrivato(RegisterPrivatoRequest request) {
        if (DAO.getDaoAccount().getByEmail(request.getEmail()) != null) {
            var responseBuilder = ResponseEntity.badRequest();
            return responseBuilder.body("Email already exists");
        } else if (request.getEmail().equals("")) {
            var responseBuilder = ResponseEntity.badRequest();
            return responseBuilder.body("Missing email");
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
    
    public ResponseEntity<?> registerAzienda(RegisterAziendaRequest request) {
        if (DAO.getDaoAccount().getByEmail(request.getEmail()) != null) {
            var responseBuilder = ResponseEntity.badRequest();
            return responseBuilder.body("Email already exists");
        } else if (request.getEmail().equals("")) {
            var responseBuilder = ResponseEntity.badRequest();
            return responseBuilder.body("Missing email");
        }
        
        var anagrafica = PartitaIVA.builder()
                .ragSociale(request.getRagSociale())
                .partitaIVA(request.getPartitaIVA())
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
        if (request.getEmail().equals("")) {
            var responseBuilder = ResponseEntity.badRequest();
            return responseBuilder.body("Missing email");
        } else if (DAO.getDaoAccount().getByEmail(request.getEmail()) == null) {
            var responseBuilder = ResponseEntity.badRequest();
            return responseBuilder.body("Email isn't registered");
        } 
        
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
    
    public ResponseEntity<?> validateToken(String token) {
        token = token.substring(7);
        var account = DAO.getDaoAccount().getByEmail(jwtService.extractUsername(token));
        if (jwtService.isTokenExpired(token)) {
            var responseBuilder = ResponseEntity.badRequest();
            return responseBuilder.body("Token has expired");
        } else if (account == null) {
            var responseBuilder = ResponseEntity.badRequest();
            return responseBuilder.body("Invalid Token");
        }
        
        var newToken = jwtService.generateToken(account); // renew token
        var response = ValidationResponse.builder()
                .email(account.getEmail())
                .token(newToken)
                .build();
        return ResponseEntity.ok(response);
    }
}
