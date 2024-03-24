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
public class GAS extends Contratto {

    @Basic
    private float gasAnno;
    @Basic
    private boolean usoCotturaCibi;
    @Basic
    private boolean produzioneAcquaCalda;
    @Basic
    private boolean riscaldamentoIndividuale;
    @Basic
    private boolean usoCommerciale;

    public float getGasAnno() {
        return gasAnno;
    }

    public void setGasAnno(float gasAnno) {
        this.gasAnno = gasAnno;
    }

    public boolean isUsoCotturaCibi() {
        return usoCotturaCibi;
    }

    public void setUsoCotturaCibi(boolean usoCotturaCibi) {
        this.usoCotturaCibi = usoCotturaCibi;
    }

    public boolean isProduzioneAcquaCalda() {
        return produzioneAcquaCalda;
    }

    public void setProduzioneAcquaCalda(boolean produzioneAcquaCalda) {
        this.produzioneAcquaCalda = produzioneAcquaCalda;
    }

    public boolean isRiscaldamentoIndividuale() {
        return riscaldamentoIndividuale;
    }

    public void setRiscaldamentoIndividuale(boolean riscaldamentoIndividuale) {
        this.riscaldamentoIndividuale = riscaldamentoIndividuale;
    }

    public boolean isUsoCommerciale() {
        return usoCommerciale;
    }

    public void setUsoCommerciale(boolean usoCommerciale) {
        this.usoCommerciale = usoCommerciale;
    }

    @Builder
    public GAS(float gasAnno, boolean usoCotturaCibi, boolean produzioneAcquaCalda, boolean riscaldamentoIndividuale, boolean usoCommerciale, Long id, String dataRichiestaServizi, String dataInizioValidita, String dataFineValidita, String descrizioneOfferta, String stato, String tipoPagamento, Sede sede) {
        super(id, dataRichiestaServizi, dataInizioValidita, dataFineValidita, descrizioneOfferta, stato, tipoPagamento, sede);
        this.gasAnno = gasAnno;
        this.usoCotturaCibi = usoCotturaCibi;
        this.produzioneAcquaCalda = produzioneAcquaCalda;
        this.riscaldamentoIndividuale = riscaldamentoIndividuale;
        this.usoCommerciale = usoCommerciale;
    }

}