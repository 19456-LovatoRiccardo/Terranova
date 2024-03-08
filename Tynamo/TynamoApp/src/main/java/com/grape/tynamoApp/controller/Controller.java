
package com.grape.tynamoApp.controller;

import com.grape.tynamoBackend.domain.Utente;
import com.grape.tynamoBackend.dao.DaoManager;

import io.swagger.v3.oas.annotations.Operation;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author 20550
 */
@RestController
@RequestMapping("/api/debug")
public class DebugController {
    @Autowired
    private DaoManager DAO;
    
    @GetMapping(path="/user/all")
    @Operation(summary = "Get all users", description = "")
    public List<Utente>getAllAule(){
        return DAO.getDaoUtente().getAll();
    }
    
    @GetMapping(path="/user/id/{id}")
    @Operation(summary = "Get aula by ID", description = "")
    public Utente getAulaById(@PathVariable("id") Long id){
        return DAO.getDaoUtente().getById(id);
    }
}
