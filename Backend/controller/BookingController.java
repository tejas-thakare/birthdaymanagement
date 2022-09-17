package project.controller;

import java.sql.Date;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.datamanager.BillingDAO;
import project.datamanager.BookingDAO;
import project.datamanager.VendorDAO;
import project.entity.BillingEntity;
import project.entity.BookingInfoEntity;
import project.entity.UserEntity;
import project.entity.VendorEntity;
import project.entity.VenueEntity;
import project.repo.BillingRepository;
import project.repo.BookingInfoRepository;
import project.repo.UserRepository;
import project.repo.VenueRepository;

@RestController
@CrossOrigin
@RequestMapping(path="/booking")
public class BookingController {

	
	@Autowired
	BookingDAO bookingDao;
	
	
	
	@PostMapping("/addbooking")
	public boolean f1(@RequestBody BookingInfoEntity booking)
	{
		boolean res=bookingDao.addBooking(booking.getBookingPackageId(),booking.getBookingDate(),booking.getBookingAmount(),booking.getBookingUser());
		if(res)
		{
			return true;
		}else return false;
	}
	
	@GetMapping("/showbooking")
	public List<BookingInfoEntity> showAll(@RequestBody VendorEntity vendor)
	{
		return bookingDao.Showall();
		
	}
	
	
}
