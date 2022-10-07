package project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.entity.VenueEntity;





@Repository
public interface VenueRepository extends JpaRepository<VenueEntity, Integer> {

	
	
	
}
