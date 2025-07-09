package com.example.ic_backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = {"http://localhost:5173"})
public class PostController {

    // @Autowired
    // UserService userService;
    // @Autowired
    // JwtUtil jwtUtil;
}
