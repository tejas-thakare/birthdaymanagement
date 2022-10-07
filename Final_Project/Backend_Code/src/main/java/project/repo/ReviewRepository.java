package project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.entity.ReviewEntity;






@Repository
public interface ReviewRepository extends JpaRepository<ReviewEntity, Integer> {

	
	
	
}
