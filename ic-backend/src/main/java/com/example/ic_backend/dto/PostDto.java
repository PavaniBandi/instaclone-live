package com.example.ic_backend.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;

@Data
public class PostDto {

    private Long id;
    private Long userId;
    private String username;
    private String userProfilePicture;
    private String caption;
    private String imageUrl;
    private LocalDateTime createdAt;
    private int likesCount;
    private int commentsCount;
    private Boolean isLiked;
    private List<CommentDto> comments;

}
