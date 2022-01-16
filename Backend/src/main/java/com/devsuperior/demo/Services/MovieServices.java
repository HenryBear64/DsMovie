package com.devsuperior.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.demo.DTO.MovieDTO;
import com.devsuperior.demo.entities.Movie;

@Service
public class MovieServices {
	@Autowired;
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> result = repository.findAll(pageable);
		Page<MovieDTO> page = result.map(x -> MovieDTO(x));
		return page;
		
	@Transactional(readOnly = true)
		public Page<MovieDTO> findById(Long id) {
			Page<Movie> result = repository.findById(id).get;
			MovieDTO dto = new MovieDTO(result);
			return dto;
	}

}
