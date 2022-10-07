package project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.entity.BookingInfoEntity;


@Repository
public interface BookingInfoRepository extends JpaRepository<BookingInfoEntity, Integer> {

	
	
	
}
