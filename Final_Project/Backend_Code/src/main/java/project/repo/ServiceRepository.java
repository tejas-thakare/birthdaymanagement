package project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.entity.ServiceEntity;






@Repository
public interface ServiceRepository extends JpaRepository<ServiceEntity, Integer> {

	
	
	
}
