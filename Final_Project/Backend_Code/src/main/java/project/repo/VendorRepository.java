package project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.entity.VendorEntity;






@Repository
public interface VendorRepository extends JpaRepository<VendorEntity, Integer> {

	
	
	
}
