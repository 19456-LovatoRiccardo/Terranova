
package com.grape.tynamoApp.controller;

import com.grape.tynamoBackend.dao.DaoManager;
import com.grape.tynamoBackend.domain.Account;

import java.util.List;
import io.swagger.v3.oas.annotations.Operation;
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
    @Autowired DaoManager DAO;
    
    @GetMapping(path="/account/all")
    @Operation(summary = "Get all users", description = "")
    public List<Account>getAllUsers(){
        return DAO.getDaoAccount().getAll();
    }
    
    @GetMapping(path="/account/id/{id}")
    @Operation(summary = "Get user by ID", description = "")
    public Account getUserById(@PathVariable("id") Long id){
        return DAO.getDaoAccount().getById(id);
    }
}
