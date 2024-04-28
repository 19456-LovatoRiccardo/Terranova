package com.grape.tynamoApp.controller;

import com.grape.tynamoApp.config.JwtService;
import com.grape.tynamoBackend.dao.DaoManager;
import com.grape.tynamoBackend.domain.Account;
import com.grape.tynamoBackend.domain.Anagrafica;
import com.grape.tynamoBackend.domain.Contratto;
import com.grape.tynamoBackend.domain.EE;
import com.grape.tynamoBackend.domain.EEandGAS;
import com.grape.tynamoBackend.domain.GAS;
import com.grape.tynamoBackend.domain.Sede;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author 20550
 */
@CrossOrigin
@RestController
@RequestMapping("/api/privateArea")
@RequiredArgsConstructor
public class PrivateAreaController {
    @Autowired
    private final DaoManager DAO;
    private final JwtService jwtService;
    
    // private final DateTimeFormatter parser = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");
    
    @GetMapping("/anagrafica")
    public Anagrafica anagrafica(@RequestHeader(HttpHeaders.AUTHORIZATION) String token) {
        var account = DAO.getDaoAccount().getByEmail(jwtService.extractUsername(token.substring(7)));
        return account.getAnagrafica();
    }
    
    @GetMapping("/contratti")
    public List<Contratto> contratti(@RequestHeader(HttpHeaders.AUTHORIZATION) String token) {
        var account = DAO.getDaoAccount().getByEmail(jwtService.extractUsername(token.substring(7)));
        return DAO.getDaoAnagrafica().getContratti(account.getAnagrafica());
    }String stato = "";
    
    @PostMapping("/registerContratto")
    public ResponseEntity<?> registerContratto(@RequestHeader(HttpHeaders.AUTHORIZATION) String token, @RequestBody RegisterContrattoRequest request) {
        Account account = DAO.getDaoAccount().getByEmail(jwtService.extractUsername(token.substring(7)));
        Anagrafica anagrafica = account.getAnagrafica();
        Sede sede = Sede.builder()
                .anagrafica(anagrafica)
                .indirizzo(request.getIndirizzo())
                .numCivico(request.getNumCivico())
                .cap(request.getCap())
                .localita(request.getLocalita())
                .provincia(request.getProvincia())
                .nazione(request.getNazione())
                .build();
        
        System.out.println(request.getDataInizioValidita());
        LocalDateTime currentTime = LocalDateTime.now();
        String dataRichiesta = currentTime.format(formatter);
        String stato = "Attivo";
        
        /*
            String stato = "";
            LocalDateTime dataInizio = LocalDateTime.parse(request.getDataInizioValidita(), parser);
            LocalDateTime dataFine = LocalDateTime.parse(request.getDataFineValidita(), parser);
            if (currentTime.isAfter(dataInizio) && currentTime.isBefore(dataFine)) {
                stato = "Attivo";
            } else {
                stato = "Non Attivo";
            }
        */
        
        Contratto contratto = null;
        switch (request.getUtility()) {
            case "EE":
                contratto = EE.builder()
                        .sede(sede)
                        .dataRichiestaServizi(dataRichiesta)
                        .dataInizioValidita(request.getDataInizioValidita())
                        .dataFineValidita(request.getDataFineValidita())
                        .descrizioneOfferta(request.getDescrizioneOfferta())
                        .stato(stato)
                        .tipoPagamento(request.getTipoPagamento())
                        .potenzaImp(request.getPotenzaImp())
                        .potenzaDisp(request.getPotenzaDisp())
                        .energiaAnno(request.getEnergiaAnno())
                        .build();
                break;
            case "GAS":
                contratto = GAS.builder()
                        .sede(sede)
                        .dataRichiestaServizi(dataRichiesta)
                        .dataInizioValidita(request.getDataInizioValidita())
                        .dataFineValidita(request.getDataFineValidita())
                        .descrizioneOfferta(request.getDescrizioneOfferta())
                        .stato(stato)
                        .tipoPagamento(request.getTipoPagamento())
                        .gasAnno(request.getGasAnno())
                        .usoCotturaCibi(request.isUsoCotturaCibi())
                        .produzioneAcquaCalda(request.isProduzioneAcquaCalda())
                        .riscaldamentoIndividuale(request.isRiscaldamentoIndividuale())
                        .usoCommerciale(request.isUsoCommerciale())
                        .build();
                break;
            case "EEandGAS":
                contratto = EEandGAS.builder()
                        .sede(sede)
                        .dataRichiestaServizi(dataRichiesta)
                        .dataInizioValidita(request.getDataInizioValidita())
                        .dataFineValidita(request.getDataFineValidita())
                        .descrizioneOfferta(request.getDescrizioneOfferta())
                        .stato(stato)
                        .tipoPagamento(request.getTipoPagamento())
                        .potenzaImp(request.getPotenzaImp())
                        .potenzaDisp(request.getPotenzaDisp())
                        .energiaAnno(request.getEnergiaAnno())
                        .gasAnno(request.getGasAnno())
                        .usoCotturaCibi(request.isUsoCotturaCibi())
                        .produzioneAcquaCalda(request.isProduzioneAcquaCalda())
                        .riscaldamentoIndividuale(request.isRiscaldamentoIndividuale())
                        .usoCommerciale(request.isUsoCommerciale())
                        .build();
                break;
            default:
                var responseBuilder = ResponseEntity.badRequest();
                return responseBuilder.body("Invalid Contract Type");
        }
        
        DAO.getDaoSede().insert(sede);
        DAO.getDaoContratto().insert(contratto);
        return ResponseEntity.ok("Contratto creato!");
    }
}