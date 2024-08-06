package com.msn.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.msn.models.Users;

public interface UsersRepository extends JpaRepository<Users, Integer>{
    Optional<Users> findByEmail(String email);
}
