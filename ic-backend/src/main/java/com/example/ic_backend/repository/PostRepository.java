package com.example.ic_backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ic_backend.entity.Post;
import com.example.ic_backend.entity.User;

public interface PostRepository extends JpaRepository<Post, Long> {

    @Query("SELECT p FROM Post p WHERE p.user IN(SELECT f FROM User u JOIN u.following f where u.id= :userId) OR p.user.id = :userId ORDER BY p.createdAt DESC")
    Page<Post> findPostsFromfollowedUsersAndCurrentUser(@Param("userId") Long userId, Pageable pageable);

    Page<Post> findByUserOrderByCreatedAtDesc(User user, Pageable pageable);
}
