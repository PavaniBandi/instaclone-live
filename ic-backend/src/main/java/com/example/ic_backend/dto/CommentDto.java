package com.example.ic_backend.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class CommentDto {

    private Long id;
    private Long userId;
    private String username;
    private String userProfilePicture;
    private String content;
    private LocalDateTime createdAt;

}
