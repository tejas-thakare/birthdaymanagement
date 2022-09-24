package project.datamanager;





import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.entity.UserEntity;
import project.entity.VenueEntity;
import project.repo.UserRepository;
import project.repo.VenueRepository;

@Service
public class VenueDAO {

	@Autowired
	public VenueRepository vrepo;
	
	public boolean addVenue()
	{
		
		VenueEntity v1=new VenueEntity("Sula",888888888,"Nashik",30000, 4);
		vrepo.save(v1);
		
		VenueEntity v2=new VenueEntity("City Centre Mall",453188888,"Nashik",30000, 2);
		vrepo.save(v2);
		
		VenueEntity v3=new VenueEntity("York",122888888,"Nashik",30000, 2);
		vrepo.save(v3);
		
		VenueEntity v4=new VenueEntity("Red Chilly",238888888,"Nashik",30000, 1);
		vrepo.save(v4);
		
		return true;
	}
	
	
	
	public List<VenueEntity>Showall()
	{
		List<VenueEntity> list=vrepo.findAll();
		return list;
	}
}
