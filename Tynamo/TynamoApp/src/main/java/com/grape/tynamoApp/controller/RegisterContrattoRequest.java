package com.grape.tynamoApp.controller;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author 20550
 */

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterContrattoRequest {
    // Contratto
        private String utility;
        private String dataInizioValidita;
        private String dataFineValidita;
        private String descrizioneOfferta;
        private String tipoPagamento;
        // EE
            private float potenzaImp;
            private float potenzaDisp;
            private float energiaAnno;
        // GAS
            private float gasAnno;
            private boolean usoCotturaCibi;
            private boolean produzioneAcquaCalda;
            private boolean riscaldamentoIndividuale;
            private boolean usoCommerciale;
            
    // Sede
        private String indirizzo;
        private int numCivico;
        private int cap;
        private String localita;
        private String provincia;
        private String nazione;
}
