package project.datamanager;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.entity.UserEntity;
import project.repo.UserRepository;

@Service
public class UserDAO {

	@Autowired
	public UserRepository urepo;
	
	
	public boolean Validation(String userId,String password)
	{
		UserEntity user=urepo.findByUserLoginId(userId);
		
		if(user.getUserPassword().equals(password))
		{
			return true;
		}
		else
		return false;
	}
	
	public boolean addUser()
	{
		
		UserEntity u1=new UserEntity("tejas","thakare",1111678333,"tejasspi37","tejas123","thakare123",null,null);
		urepo.save(u1);
		UserEntity u2=new UserEntity("mayur","patil", 8668463503,"mayur37","mayur123","patil123",null,null);
		urepo.save(u2);
		return true;
	}
}
