package project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.entity.VenueEntity;

import project.repo.VenueRepository;

@RestController
@CrossOrigin
@RequestMapping(path="/venue")
public class VenueController {

	

	@Autowired
	VenueRepository repo; 
	
	@PostMapping("/add/{venueId}/{venueName}/{venueContact}/{venueLocation}/{venueCost}/{venueRating}")
	public String f1(@PathVariable int venueId, @PathVariable String venueName,@PathVariable long venueContact,@PathVariable String venueLocation,@PathVariable int venueCost,@PathVariable int venueRating)
	{
		VenueEntity product =new VenueEntity();
		repo.save(product);
		return "input added";
	}
	
	@GetMapping("/showvenues")
	public List<VenueEntity> showAll()
	{
		List<VenueEntity> list=repo.findAll();
		return list;
	}
	
	
}
