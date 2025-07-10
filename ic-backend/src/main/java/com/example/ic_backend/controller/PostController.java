package com.example.ic_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ic_backend.dto.PostDto;
import com.example.ic_backend.entity.Post;
import com.example.ic_backend.entity.User;
import com.example.ic_backend.service.PostService;
import com.example.ic_backend.service.UserService;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = {"http://localhost:5173"})
public class PostController {

    @Autowired
    UserService userService;

    @Autowired
    PostService postService;

    private User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        return userService.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @PostMapping
    public ResponseEntity<PostDto> createPost(@RequestBody Post post) {
        User user = getCurrentUser();
        post.setUser(user);
        Post createdPost = postService.createPost(post);
        PostDto postDto = postService.getPostById(createdPost.getId(), user.getId());

        return ResponseEntity.ok(postDto);

    }

    //feed
    //getPost
    //getUserPosts
    //likePost
    //unlikePost
    //addComments
}
