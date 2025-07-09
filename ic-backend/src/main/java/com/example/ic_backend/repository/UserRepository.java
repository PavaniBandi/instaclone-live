package com.example.ic_backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ic_backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Optional<User> findById(Long id);

    boolean existsByEmail(String email);

    boolean existsByUsername(String username);

    @Query("SELECT u from User u WHERE u.Id IN(SELECT f.id FROM User u2 JOIN u2.followers f WHERE u2.id=:userId )")
    List<User> findFollowersByUserId(@Param("userId") Long userId);

    @Query("SELECT u from User u WHERE u.Id IN(SELECT f.id FROM User u2 JOIN u2.following f WHERE u2.id=:userId )")
    List<User> findFollowingByUserId(@Param("userId") Long userId);
}
