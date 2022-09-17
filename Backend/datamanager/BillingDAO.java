package project.datamanager;





import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.entity.BillingEntity;
import project.entity.UserEntity;
import project.entity.VenueEntity;
import project.repo.BillingRepository;
import project.repo.UserRepository;
import project.repo.VenueRepository;

@Service
public class BillingDAO {

	@Autowired
	public BillingRepository brepo;
	
	public boolean makeBill()
	{
		
		
		
		return true;
	}
	
	
	
	public List<BillingEntity> Showall()
	{
		List<BillingEntity> list=brepo.findAll();
		return list;
	}
}
