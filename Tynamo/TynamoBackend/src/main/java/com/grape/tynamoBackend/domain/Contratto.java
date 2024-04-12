package com.grape.tynamoBackend.domain;

import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

/**
 * @author 20550
 */
@NoArgsConstructor
@AllArgsConstructor
@Entity
public abstract class Contratto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id;
    @Basic
    private String dataRichiestaServizi;
    @Basic
    private String dataInizioValidita;
    @Basic
    private String dataFineValidita;
    @Basic
    private String descrizioneOfferta;
    @Basic
    private String stato;
    @Basic
    private String tipoPagamento;
    @ManyToOne
    private Sede sede;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDataRichiestaServizi() {
        return dataRichiestaServizi;
    }

    public void setDataRichiestaServizi(String dataRichiestaServizi) {
        this.dataRichiestaServizi = dataRichiestaServizi;
    }

    public String getDataInizioValidita() {
        return dataInizioValidita;
    }

    public void setDataInizioValidita(String dataInizioValidita) {
        this.dataInizioValidita = dataInizioValidita;
    }

    public String getDataFineValidita() {
        return dataFineValidita;
    }

    public void setDataFineValidita(String dataFineValidita) {
        this.dataFineValidita = dataFineValidita;
    }

    public String getDescrizioneOfferta() {
        return descrizioneOfferta;
    }

    public void setDescrizioneOfferta(String descrizioneOfferta) {
        this.descrizioneOfferta = descrizioneOfferta;
    }

    public String getStato() {
        return stato;
    }

    public void setStato(String stato) {
        this.stato = stato;
    }

    public String getTipoPagamento() {
        return tipoPagamento;
    }

    public void setTipoPagamento(String tipoPagamento) {
        this.tipoPagamento = tipoPagamento;
    }

    public Sede getSede() {
        return sede;
    }

    public void setSede(Sede sede) {
        this.sede = sede;
    }

}