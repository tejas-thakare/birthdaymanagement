package project.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.entity.BillingEntity;
import project.entity.UserEntity;






@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

	
	public UserEntity findByUserLoginId(String userName);
	
}
