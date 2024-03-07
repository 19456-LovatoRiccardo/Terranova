package com.grape.tynamoApp.controller;

import com.grape.tynamoBackend.domain.Utente;
import com.grape.tynamoBackend.dao.DaoManager;

import io.swagger.v3.oas.annotations.Operation;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author 20550
 */
@RestController
@RequestMapping("/api/debug")
public class DebugController {
    @Autowired DaoManager DAO;
    
    @PostMapping(path="/user/create", consumes="application/json")
    @Operation(summary = "Create user", description = "")
    public void createUser(@RequestBody Utente user){
        DAO.getDaoUtente().insert(user);
    }
    
    @GetMapping(path="/user/all")
    @Operation(summary = "Get all users", description = "")
    public List<Utente>getAllUsers(){
        return DAO.getDaoUtente().getAll();
    }
    
    @GetMapping(path="/user/id/{id}")
    @Operation(summary = "Get user by ID", description = "")
    public Utente getUserById(@PathVariable("id") Long id){
        return DAO.getDaoUtente().getById(id);
    }
}
