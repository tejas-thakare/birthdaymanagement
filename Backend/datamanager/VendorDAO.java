package project.datamanager;





import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.entity.BookingInfoEntity;
import project.entity.ServiceEntity;
import project.entity.UserEntity;
import project.entity.VendorEntity;
import project.repo.BookingInfoRepository;
import project.repo.ServiceRepository;
import project.repo.UserRepository;
import project.repo.VendorRepository;

@Service
public class VendorDAO {

	@Autowired
	public VendorRepository vrepo;
	
	@Autowired
	private BookingInfoRepository bookingrepo;
	
	@Autowired
	private ServiceRepository srepo;
	
	public boolean addVendor()
	{
		
		VendorEntity v1=new VendorEntity("tushar gabhane",1111678333,"tushar123@gmail.com","tushar123","gabhane123");
		vrepo.save(v1);
		VendorEntity v2=new VendorEntity("vishal thite",1111678333,"vishal123@gmail.com","vishal123","thite123");
		vrepo.save(v2);
		VendorEntity v3=new VendorEntity("anurag tejwani",1111678333,"vishal123@gmail.com","anurag123","tejwani123");
		vrepo.save(v3);
		VendorEntity v4=new VendorEntity("aditya patil",1111678333,"vishal123@gmail.com","aditya123","patil123");
		vrepo.save(v4);
		return true;
	}
	
	public boolean Validation(String userId,String password)
	{
		VendorEntity vendor=vrepo.findByVendorLoginId(userId);
		
		if(vendor !=null && vendor.getVendorPassword().equals(password))
		{
			return true;
		}
		else
		return false;
	}
	
	public List<VendorEntity>Showall()
	{
		List<VendorEntity> list=vrepo.findAll();
		return list;
	}
	
	public List<BookingInfoEntity> showBooking(int vendorLoginId)
	{
		List<BookingInfoEntity>list=bookingrepo.findAll();
		List <Integer>bookings=null;
		List<BookingInfoEntity>res=null;
		if(list!=null) 
		{
			for (BookingInfoEntity b : list) {
			
				List<VendorEntity>vlist=b.getVendors();
					for (VendorEntity v: vlist) {
						if(v.getVendorId()==vendorLoginId)
						{
							bookings.add(b.getBooking_number());
						}
					}
			}
			
			for (Integer id : bookings) {
				for (BookingInfoEntity booking : list) {
					if(id==booking.getBooking_number())
					{
						res.add(booking);
					}
				}
			}
			
			return res;
		}else
			return null;
	}
	
	public List<VendorEntity>showRequests()
	{
		List<VendorEntity>vlist=vrepo.findAll();
		if(vlist!=null)
		{
			List<VendorEntity>reslist=vlist.stream().filter(v->!v.isVendorStatus()).collect(Collectors.toList());
			return reslist;
		}
		else return null;
	}
	
	public boolean ApproveVendor(int VendorId)
	{
		Optional<VendorEntity> vendor=vrepo.findById(VendorId);
		if(vendor !=null) 
		{
			vendor.get().setVendorStatus(true);
			vrepo.save(vendor.get());
		
		return true;
		}else return false;
		
	}
	
	
	public List<ServiceEntity> showServices(int vendorId)
	{
		Optional<VendorEntity> vendor=vrepo.findById(vendorId);
		List<ServiceEntity>res=vendor.get().getServices();
		return res;
		
		
	}
}
