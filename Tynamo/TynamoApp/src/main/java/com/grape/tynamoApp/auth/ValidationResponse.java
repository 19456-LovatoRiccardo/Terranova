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
public class ValidationResponse {
    private String email;
    private String token;
}
