package project.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.datamanager.BillingDAO;
import project.entity.BillingEntity;


@RestController
@CrossOrigin
@RequestMapping(path="/billing")
public class BillingController {

	@Autowired
	BillingDAO billDao;
	
	@PostMapping("/getbill")
	public BillingEntity f1()
	{
		//billDao.addBill();
		return null;
	}
	
	@GetMapping("/showbills")
	public List<BillingEntity> showAll()
	{
		return billDao.Showall();
	}
	
	
}
