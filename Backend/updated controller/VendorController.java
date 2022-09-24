package project.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import project.datamanager.VendorDAO;
import project.entity.BookingInfoEntity;
import project.entity.ServiceEntity;
import project.entity.VendorEntity;


@RestController
@CrossOrigin
@RequestMapping(path="/vendor")
public class VendorController {

	 
	@Autowired
	public VendorDAO vendorDao;
	
	@PostMapping("/addvendor")
	public String f1(@RequestBody VendorEntity vendor)
	{
		vendorDao.addVendor(vendor);
	
		
		return "vendor added";
	}
	
	@GetMapping("/showall")
	public List<VendorEntity> ShowVendors()
	{
		return vendorDao.Showall();
	}
	
	@PostMapping("/checkpassword")
	public String checkPassword(@RequestBody VendorEntity vendor)
	{
	
		boolean check=vendorDao.Validation(vendor.getVendorLoginId(),vendor.getVendorPassword());
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
	
	@GetMapping("/showbookings")
	public List<BookingInfoEntity> showBooking(@RequestBody VendorEntity vendor)
	{
		return vendorDao.showBooking(vendor.getVendorId());
	}
	
	@GetMapping("/showrequests")
	public List<ServiceEntity> showRequests(@RequestBody VendorEntity vendor)
	{
		return vendorDao.showServices(vendor.getVendorId());
	}
}
