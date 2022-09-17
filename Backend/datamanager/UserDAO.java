package project.datamanager;





import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.entity.UserEntity;
import project.repo.UserRepository;

@Service
public class UserDAO {

	@Autowired
	public UserRepository urepo;
	
	public boolean addUser()
	{
		
		UserEntity u1=new UserEntity("tejas","thakare",1111678333,"tejasspi37","tejas123","thakare123",null,null);
		urepo.save(u1);
		UserEntity u2=new UserEntity("mayur","patil",8463503,"mayur37","mayur123","patil123",null,null);
		urepo.save(u2);
		UserEntity u3=new UserEntity("tanmay","bhat",1111678333,"tejasspi37","tanmay123","bhat123",null,null);
		urepo.save(u3);
		UserEntity u4=new UserEntity("pranali","mundale",8463503,"mayur37","pranali123","mundale123",null,null);
		urepo.save(u4);
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
}
