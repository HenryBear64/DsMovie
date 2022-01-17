package com.devsuperior.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.demo.DTO.ScoreDTO;
import com.devsuperior.demo.Repositories.MovieRepository;
import com.devsuperior.demo.Repositories.UserRepository;
import com.devsuperior.demo.entities.Movie;
import com.devsuperior.demo.entities.Score;
import com.devsuperior.demo.entities.User;

@Service
public class ScoreServices {
	@Autowired;
	private MovieRepository movieRepository;
	
	@Autowired;
	private UserRepository userRepository;
	
	@Autowired;
	private ScoreRepository scoreRepository;
	
	@Transactional
	public movieDTO saveScore(ScoreDTO dto) {
		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
				
		Movie movie = movieRepository.FindById(dto.getMovieId().get())
	
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		For (Score s movie.getScores()) {
			sum =sum + s.getValue();
			
		}
		double avg = sum / movie.getScores().size();
		
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		movie = movieRepository.save(movie);

		}
	return new MovieDTO(movie);

}
