package project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.entity.BillingEntity;






@Repository
public interface BillingRepository extends JpaRepository<BillingEntity, Integer> {

	
	
	
}
