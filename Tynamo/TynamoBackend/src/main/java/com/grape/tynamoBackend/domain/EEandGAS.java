package com.grape.tynamoBackend.domain;

import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

/**
 * @author 20550
 */
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class EEandGAS extends Contratto {

    @Basic
    private float potenzaImp;
    @Basic
    private float potenzaDisp;
    @Basic
    private float energiaAnno;
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

    public float getPotenzaImp() {
        return potenzaImp;
    }

    public void setPotenzaImp(float potenzaImp) {
        this.potenzaImp = potenzaImp;
    }

    public float getPotenzaDisp() {
        return potenzaDisp;
    }

    public void setPotenzaDisp(float potenzaDisp) {
        this.potenzaDisp = potenzaDisp;
    }

    public float getEnergiaAnno() {
        return energiaAnno;
    }

    public void setEnergiaAnno(float energiaAnno) {
        this.energiaAnno = energiaAnno;
    }

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
    public EEandGAS(float potenzaImp, float potenzaDisp, float energiaAnno, float gasAnno, boolean usoCotturaCibi, boolean produzioneAcquaCalda, boolean riscaldamentoIndividuale, boolean usoCommerciale, Long id, String dataRichiestaServizi, String dataInizioValidita, String dataFineValidita, String descrizioneOfferta, String stato, String tipoPagamento, Sede sede) {
        super(id, dataRichiestaServizi, dataInizioValidita, dataFineValidita, descrizioneOfferta, stato, tipoPagamento, sede);
        this.potenzaImp = potenzaImp;
        this.potenzaDisp = potenzaDisp;
        this.energiaAnno = energiaAnno;
        this.gasAnno = gasAnno;
        this.usoCotturaCibi = usoCotturaCibi;
        this.produzioneAcquaCalda = produzioneAcquaCalda;
        this.riscaldamentoIndividuale = riscaldamentoIndividuale;
        this.usoCommerciale = usoCommerciale;
    }

}