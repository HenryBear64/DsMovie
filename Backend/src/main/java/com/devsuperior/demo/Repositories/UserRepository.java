package com.devsuperior.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.demo.entities.User;

public interface extend JpaRepository<User, Long> UserRepository {
	
	User findByEmail(String email);
}
