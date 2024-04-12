package com.grape.tynamoApp.controller;

import com.grape.tynamoApp.config.JwtService;
import com.grape.tynamoBackend.dao.DaoManager;
import com.grape.tynamoBackend.domain.Anagrafica;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author 20550
 */
@CrossOrigin
@RestController
@RequestMapping("/api/privateArea")
@RequiredArgsConstructor
public class PrivateAreaController {
    @Autowired
    private final DaoManager DAO;
    private final JwtService jwtService;
    
    @GetMapping("/anagrafica")
    public Anagrafica anagrafica(@RequestHeader(HttpHeaders.AUTHORIZATION) String token) {
        var account = DAO.getDaoAccount().getByEmail(jwtService.extractUsername(token.substring(7)));
        return account.getAnagrafica();
    }
}