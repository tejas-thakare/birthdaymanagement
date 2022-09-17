package project.datamanager;





import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.entity.PackageEntity;
import project.entity.UserEntity;
import project.entity.VenueEntity;
import project.repo.PackageRepository;
import project.repo.UserRepository;
import project.repo.VenueRepository;

@Service
public class PackageDAO {

	@Autowired
	public PackageRepository prepo;
	
	public boolean addPackage(String packageName,int cost)
	{
		
		prepo.save(new PackageEntity(packageName,cost));
		
		return true;
		
	}
	
	
	
	public List<PackageEntity>Showall()
	{
		List<PackageEntity> list=prepo.findAll();
		return list;
	}
}
