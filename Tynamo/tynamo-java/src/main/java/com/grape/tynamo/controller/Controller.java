
package com.grape.tynamo.controller;

import com.grape.tynamo.domain.Utente;
import com.grape.tynamo.dao.DaoManager;

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
@RequestMapping("/crud")

public class Controller {
    @Autowired DaoManager DAO;
    
    @GetMapping(path="/user")
    //@ApiOperation(value = "Get author", notes = "Get author of this demo")
    @Operation(summary = "Get Patty user", description = "Get Patty")
    public Utente user(){
        Utente utente = new Utente("Patty", "12345");
        return utente;
    }
    
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
