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

}