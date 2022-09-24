package project.datamanager;





import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.entity.ServiceEntity;
import project.entity.UserEntity;
import project.entity.VenueEntity;
import project.repo.ServiceRepository;
import project.repo.UserRepository;
import project.repo.VendorRepository;
import project.repo.VenueRepository;

@Service
public class ServiceDAO {

	@Autowired
	public ServiceRepository srepo;
	
	@Autowired
	public VendorRepository vrepo;
	
	public boolean addService(String vendorId,String serviceType,int serviceCost)
	{
		ServiceEntity service=new ServiceEntity();
		service.setServiceType(serviceType);
		service.setServiceCost(serviceCost);
		
		service.addVendor(vrepo.findByVendorLoginId(vendorId));
		
		return true;
	}
	
	
	
	public List<ServiceEntity> Showall()
	{
		List<ServiceEntity> list=srepo.findAll();
		return list;
	}
}
