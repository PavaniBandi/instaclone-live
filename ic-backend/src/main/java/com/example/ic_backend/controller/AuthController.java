package com.example.ic_backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ic_backend.entity.User;
import com.example.ic_backend.security.JwtUtil;
import com.example.ic_backend.service.UserService;

import lombok.Data;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = {"http://localhost:5173"})
public class AuthController {

    @Autowired
    UserService userService;

    @Autowired
    JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        boolean valid = userService.validateCredentials(request.getEmail(), request.getPassword());
        if (!valid) {
            return ResponseEntity.status(401).body("Invalid Creds");
        }
        User user = userService.findByEmail(request.getEmail()).get();
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", user.getId());
        String token = jwtUtil.generateToken(request.getEmail(), claims);
        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("username", user.getUsername());
        response.put("fullName", user.getFullName());
        response.put("id", user.getId());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> register(@RequestBody SignupRequest request) {
        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .password(request.getPassword())
                .username(request.getUsername())
                .build();
        userService.registerUser(user);
        Map<String, String> response = new HashMap<>();
        response.put("message", "User Registered Successfully");
        return ResponseEntity.ok(response);
    }

    @Data
    public static class SignupRequest {

        private String username;
        private String email;
        private String password;
        private String fullName;
    }

    @Data
    public static class LoginRequest {

        private String email;
        private String password;
    }

}
