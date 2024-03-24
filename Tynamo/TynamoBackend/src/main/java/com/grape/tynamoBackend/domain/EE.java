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
public class EE extends Contratto {

    @Basic
    private float potenzaImp;
    @Basic
    private float potenzaDisp;
    @Basic
    private float energiaAnno;

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

    @Builder
    public EE(float potenzaImp, float potenzaDisp, float energiaAnno, Long id, String dataRichiestaServizi, String dataInizioValidita, String dataFineValidita, String descrizioneOfferta, String stato, String tipoPagamento, Sede sede) {
        super(id, dataRichiestaServizi, dataInizioValidita, dataFineValidita, descrizioneOfferta, stato, tipoPagamento, sede);
        this.potenzaImp = potenzaImp;
        this.potenzaDisp = potenzaDisp;
        this.energiaAnno = energiaAnno;
    }
    
}