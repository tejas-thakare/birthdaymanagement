package project.controller;

import java.sql.Date;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.entity.BillingEntity;
import project.entity.ReviewEntity;
import project.entity.UserEntity;
import project.entity.VenueEntity;
import project.repo.BillingRepository;
import project.repo.ReviewRepository;
import project.repo.UserRepository;
import project.repo.VenueRepository;

@RestController
@RequestMapping(path="/review")
public class ReviewController {

	

	@Autowired
	ReviewRepository repo; 
	
	@Autowired
	UserRepository urepo;
	
	
	@PostMapping("/addreview")
	public String f1()
	{
		UserEntity u1=urepo.getById(1);
		ReviewEntity r1=new ReviewEntity("great food",4,u1);
		repo.save(r1);
		ReviewEntity r2=new ReviewEntity("worst food",1,u1);
		repo.save(r2);
		return "review added";
	}
	
	@GetMapping("/showreviews")
	public List<ReviewEntity> showAll()
	{
		List<ReviewEntity> list=repo.findAll();
		return list;
	}
	
	
}
