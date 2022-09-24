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
import project.entity.BookingInfoEntity;
import project.entity.UserEntity;
import project.entity.VenueEntity;
import project.repo.UserRepository;
import project.repo.VenueRepository;

@RestController
@RequestMapping(path="/user")
public class UserController {

	

	@Autowired
	public UserRepository repo; 
	@Autowired
	public UserDAO userdao;
	
	@PostMapping("/adduser")
	public String f1(@RequestBody UserEntity user)
	{
		userdao.addUser(user);
		return "user added";
	}
	
	@PostMapping("/forgetpassword")
	public boolean forgetPassword(@RequestBody UserEntity user)
	{
		return userdao.UpdatePassword(user.getUserLoginId(), user.getUserContactNo(), user.getUserPassword());
	}
	
	
	@GetMapping("/showall")
	public List<UserEntity> ShowUser()
	{
		return userdao.Showall();
	}
	
	@GetMapping("/checkpassword")
	public String checkPassword(@RequestBody UserEntity user)
	{
	
		boolean check=userdao.Validation(user.getUserLoginId(), user.getUserPassword());
		String res;
		if(check==true)
		{
			 res="correct password";
		}
		else
		{
			res="wrong password";
		}
		return res;
		

	}
	
	@GetMapping("/getbooking")
	public BookingInfoEntity getBooking(@RequestBody UserEntity user)
	{
		return userdao.getBookings(user.getUserId());
	}
	
}
