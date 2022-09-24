package project.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.datamanager.PackageDAO;
import project.datamanager.UserDAO;
import project.datamanager.VendorDAO;
import project.datamanager.VenueDAO;
import project.entity.BookingInfoEntity;
import project.entity.PackageEntity;
import project.entity.UserEntity;
import project.entity.VendorEntity;
import project.entity.VenueEntity;


@RestController
@CrossOrigin
@RequestMapping(path="/package")
public class PackageController {

	 
	@Autowired
	private PackageDAO packageDao;
	
	@GetMapping("/showpackages")
	public List<PackageEntity> showPackages()
	{
		return packageDao.Showall();
	}
	
	@GetMapping("/addpackage")
	public boolean ShowVendors(@RequestBody PackageEntity pack)
	{
		boolean res=packageDao.addPackage(pack.getPackageName(), pack.getPackageCost());
		if(res)
		{
			return true;
		}
		else
			return false;
	}
	
}
