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
import project.entity.UserEntity;
import project.entity.VenueEntity;
import project.repo.BillingRepository;
import project.repo.UserRepository;
import project.repo.VenueRepository;

@RestController
@RequestMapping(path="/billing")
public class BillingController {

	

	@Autowired
	BillingRepository repo; 
	@Autowired
	UserRepository urepo;
	
	
	@PostMapping("/addbilling")
	public String f1()
	{
		UserEntity u1=urepo.getById(1);
		BillingEntity b1=new BillingEntity(500.50,15000.50,new Date(2018,11,01),10,u1);
		repo.save(b1);
		BillingEntity b2=new BillingEntity(555.50,35000.50,new Date(2022,10,11),101,u1);
		repo.save(b2);
		return "input added";
	}
	
	@GetMapping("/showbills")
	public List<BillingEntity> showAll()
	{
		List<BillingEntity> list=repo.findAll();
		return list;
	}
	
	
}
