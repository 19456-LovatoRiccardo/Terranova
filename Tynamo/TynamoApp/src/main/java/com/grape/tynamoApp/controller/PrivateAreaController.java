package com.grape.tynamoApp.controller;

import com.grape.tynamoBackend.dao.DaoManager;
import com.grape.tynamoBackend.domain.Anagrafica;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
    
    @GetMapping("/anagrafica")
    public Anagrafica anagrafica() {
        return DaoManager.getEM().find(Anagrafica.class, 0);
    }
}