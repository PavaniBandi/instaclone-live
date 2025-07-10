package com.example.ic_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ic_backend.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {

}
