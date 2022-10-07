package project.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.datamanager.UserDAO;
import project.entity.BillingEntity;
import project.entity.UserEntity;
import project.entity.VenueEntity;
import project.repo.UserRepository;
import project.repo.VenueRepository;

@RestController
@RequestMapping(path="/user")
public class UserController {

	

	@Autowired
	public UserRepository repo; 
	
	
	@PostMapping("/adduser")
	public String f1()
	{
		
		//UserDAO user=new UserDAO();
		//user.addUser();
		UserEntity u1=new UserEntity("tejas","thakare",678333,"tejasspi37","tejas123","thakare123",null,null);
		repo.save(u1);
		UserEntity u2=new UserEntity("mayur","patil", 866846,"mayur37","mayur123","patil123",null,null);
		repo.save(u2);
		return "user added";
	}
	
	@GetMapping("/showall")
	public List<UserEntity> showAll()
	{
		List<UserEntity> list=repo.findAll();
		return list;
	}
	
	@GetMapping("/checkpassword")
	public String checkPassword(@RequestBody UserEntity user)
	{
//		UserDAO dao=new UserDAO();
//		boolean check=dao.Validation(user.getUserLoginId(), user.getUserPassword());
//		String res;
//		if(check)
//		{
//			 res="correct password";
//		}
//		else
//		{
//			res="correct password";
//		}
//		return res;
		
		UserEntity u=repo.findByUserLoginId(user.getUserLoginId());
		
		if(u!=null&&u.getUserPassword().equals(user.getUserPassword()))
		{
			return "correct password";
		}
		else
		return "incorrect password";
	}
	
}
