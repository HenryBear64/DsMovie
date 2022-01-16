package com.devsuperior.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.demo.entities.Score;
import com.devsuperior.demo.entities.ScorePK;

public interface extend JpaRepository<Score, ScorePK> ScoreRepository {
	
}
