package com.grape.tynamoBackend.domain;

import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

/**
 * @author 20550
 */
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Persona extends Anagrafica {

    @Basic
    private String cognome;
    @Basic
    private String nome;

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Builder
    public Persona(String cognome, String nome, Long id, String ragSociale, String codiceFiscale, String indirizzo, int numCivico, int cap, String localita, String provincia, String nazione, String numTelefonico, String email, Persona contatto) {
        super(id, ragSociale, codiceFiscale, indirizzo, numCivico, cap, localita, provincia, nazione, numTelefonico, email, contatto);
        this.cognome = cognome;
        this.nome = nome;
    }

}