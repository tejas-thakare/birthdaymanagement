package project.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import antlr.collections.List;
import project.entity.ServiceEntity;






@Repository
public interface ServiceRepository extends JpaRepository<ServiceEntity, Integer> {



	
	
	
}
