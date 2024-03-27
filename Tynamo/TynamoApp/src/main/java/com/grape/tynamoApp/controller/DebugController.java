package com.grape.tynamoApp.controller;

import com.grape.tynamoBackend.dao.DaoManager;
import com.grape.tynamoBackend.domain.Account;
import com.grape.tynamoBackend.domain.Anagrafica;
import com.grape.tynamoBackend.domain.Contratto;
import com.grape.tynamoBackend.domain.Sede;

import java.util.List;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author 20550
 */
@CrossOrigin
@RestController
@RequestMapping("/api/debug")
public class DebugController {
    @Autowired DaoManager DAO;
    
    @GetMapping(path="/checkConnection")
    public boolean checkConnection(){
        return true;
    }
    
    @GetMapping(path="/account/all")
    @Operation(summary = "Get all accounts", description = "")
    public List<Account> getAllAccounts(){
        return DAO.getDaoAccount().getAll();
    }
    
    @GetMapping(path="/account/id/{id}")
    @Operation(summary = "Get account by ID", description = "")
    public Account getAccountById(@PathVariable("id") Long id){
        return DAO.getDaoAccount().getById(id);
    }
    
    @GetMapping(path="/anagrafica/all")
    @Operation(summary = "Get all anagrafiche", description = "")
    public List<Anagrafica> getAllAnagrafiche(){
        return DAO.getDaoAnagrafica().getAll();
    }
    
    @GetMapping(path="/anagrafica/id/{id}")
    @Operation(summary = "Get anagrafica by ID", description = "")
    public Anagrafica getAnagraficaById(@PathVariable("id") Long id){
        return DAO.getDaoAnagrafica().getById(id);
    }
    
    @GetMapping(path="/contratto/all")
    @Operation(summary = "Get all contratti", description = "")
    public List<Contratto> getAllContratti(){
        return DAO.getDaoContratto().getAll();
    }
    
    @GetMapping(path="/contratto/id/{id}")
    @Operation(summary = "Get contratto by ID", description = "")
    public Contratto getContrattoById(@PathVariable("id") Long id){
        return DAO.getDaoContratto().getById(id);
    }
    
    @GetMapping(path="/sede/all")
    @Operation(summary = "Get all sedi", description = "")
    public List<Sede> getAllSedi(){
        return DAO.getDaoSede().getAll();
    }
    
    @GetMapping(path="/sede/id/{id}")
    @Operation(summary = "Get sede by ID", description = "")
    public Sede getSedeById(@PathVariable("id") Long id){
        return DAO.getDaoSede().getById(id);
    }
}
