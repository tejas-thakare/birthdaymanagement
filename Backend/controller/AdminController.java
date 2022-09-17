package project.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.datamanager.UserDAO;
import project.datamanager.VendorDAO;
import project.datamanager.VenueDAO;
import project.entity.BookingInfoEntity;
import project.entity.UserEntity;
import project.entity.VendorEntity;
import project.entity.VenueEntity;


@RestController
@CrossOrigin
@RequestMapping(path="/admin")
public class AdminController {

	 
	@Autowired
	public VendorDAO vendorDao;
	
	@Autowired
	public UserDAO userDao;
	
	@Autowired
	private VenueDAO venuedao;
	
	@GetMapping("/showallvendors")
	public List<VendorEntity> ShowVendors()
	{
		return vendorDao.Showall();
	}
	
	@GetMapping("/showallusers")
	public List<UserEntity> ShowUser()
	{
		return userDao.Showall();
	}
	
	@GetMapping("/showrequests")
	public List<VendorEntity> ShowRequests()
	{
		return vendorDao.showRequests();
	}
	
	@GetMapping("/approverequest")
	public boolean ApproveRequests(@RequestBody VendorEntity vendor)
	{
		return vendorDao.ApproveVendor(vendor.getVendorId());
	}
	
	@PostMapping("/addvenue")
	public boolean AddVenue(@RequestBody VenueEntity venue)
	{
		return venuedao.addVenue();
	}
	
	@GetMapping("/showallvenues")
	public List<VenueEntity> ShowVenues()
	{
		return venuedao.Showall();
	}
	
}
