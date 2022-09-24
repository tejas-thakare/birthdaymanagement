package project.datamanager;





import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.entity.BookingInfoEntity;
import project.entity.UserEntity;
import project.repo.BookingInfoRepository;
import project.repo.UserRepository;

@Service
public class UserDAO {

	@Autowired
	public UserRepository urepo;
	
	@Autowired
	public BookingInfoRepository brepo;
	
	public boolean addUser(UserEntity user)
	{
		
		urepo.save(user);
		return true;
	}
	
	public boolean Validation(String userId,String password)
	{
		UserEntity user=urepo.findByUserLoginId(userId);
		
		if(user !=null && user.getUserPassword().equals(password))
		{
			return true;
		}
		else
		return false;
	}
	
	public List<UserEntity>Showall()
	{
		List<UserEntity> list=urepo.findAll();
		return list;
	}
	
	public boolean UpdatePassword(String name,long num,String password)
	{
		UserEntity user=urepo.findByUserLoginId(name);
		if(user!=null && user.getUserContactNo()==num)
		{
			user.setUserPassword(password);
			return true;
		}else return false;
	}
	
	public BookingInfoEntity getBookings(int userId)
	{
		List <BookingInfoEntity>blist=brepo.findAll();
		List<BookingInfoEntity>reslist=new ArrayList<>();
				
		for (BookingInfoEntity bookingInfoEntity : blist) {
			if(bookingInfoEntity.getBookingUser().getUserId()==userId)
			{
				return bookingInfoEntity;
			}
		}
		return null;
	}
}
