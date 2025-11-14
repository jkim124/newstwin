package com.est.newstwin.service;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailAsyncService {

    private final EmailService emailService;

    @Async
    public void sendVerificationEmail(String email, String token) {
        emailService.sendVerificationEmail(email, token);
    }
}
