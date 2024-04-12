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
public class PartitaIVA extends Anagrafica {

    @Basic
    private String partitaIVA;

    public String getPartitaIVA() {
        return partitaIVA;
    }

    public void setPartitaIVA(String partitaIVA) {
        this.partitaIVA = partitaIVA;
    }

    @Builder
    public PartitaIVA(String partitaIVA, Long id, String ragSociale, String codiceFiscale, String indirizzo, int numCivico, int cap, String localita, String provincia, String nazione, String numTelefonico, String email, Persona contatto) {
        super(id, ragSociale, codiceFiscale, indirizzo, numCivico, cap, localita, provincia, nazione, numTelefonico, email, contatto);
        this.partitaIVA = partitaIVA;
    }

}