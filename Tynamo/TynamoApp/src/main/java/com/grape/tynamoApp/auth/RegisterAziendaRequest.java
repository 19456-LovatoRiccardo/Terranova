package com.grape.tynamoApp.auth;

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
public class RegisterAziendaRequest {
    private String email;
    private String password;
    private String partitaIVA;
    private String ragSociale;
    private String codiceFiscale;
    private String indirizzo;
    private int numCivico;
    private int cap;
    private String localita;
    private String provincia;
    private String nazione;
    private String numTelefonico;
}
