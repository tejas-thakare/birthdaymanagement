package project.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.entity.BookingInfoEntity;
import project.entity.UserEntity;
import project.entity.VendorEntity;


@Repository
public interface BookingInfoRepository extends JpaRepository<BookingInfoEntity, Integer> {

	
	//public List<BookingInfoEntity> findByVendorLoginId(String Id);
	
}
