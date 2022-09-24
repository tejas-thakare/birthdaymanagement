package project.datamanager;





import java.sql.Date;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import project.entity.BillingEntity;
import project.entity.BookingInfoEntity;
import project.entity.PackageEntity;
import project.entity.ServiceEntity;
import project.entity.UserEntity;
import project.entity.VendorEntity;
import project.entity.VenueEntity;
import project.repo.BillingRepository;
import project.repo.BookingInfoRepository;
import project.repo.PackageRepository;
import project.repo.UserRepository;
import project.repo.VendorRepository;
import project.repo.VenueRepository;

@Service
public class BookingDAO {

	@Autowired
	private BookingInfoRepository brepo;
	
	@Autowired
	private VendorRepository vrepo;
	
	@Autowired
	private VenueRepository venuerepo;
	
	@Autowired
	private PackageRepository prepo;
	
	@Autowired
	private UserRepository urepo;
	
	
	
	public boolean addBooking(int userid,int venueId,int packageId,Date date,double amount )
	{
		BookingInfoEntity booking =new BookingInfoEntity();
		
		booking.setBookingUser(urepo.findById(userid).get());
		
		Optional<PackageEntity> pack=prepo.findById(packageId);
		booking.setPackage(pack.get());
		
		booking.setBookingVenue(venuerepo.findById(venueId).get());
		booking.setBookingAmount(amount);
		booking.setBookingDate(date);
		
		
		List<ServiceEntity>services=pack.get().getServices();
		
		for (ServiceEntity serviceEntity : services) {
			
			List <VendorEntity>vendors=serviceEntity.getVendors();
			vendors.sort(((o1, o2) -> o2.getVendorRating()-o1.getVendorRating()));
			booking.addVendor(vendors.get(0));
			
		}
		
		brepo.save(booking);
		if(pack.get().getServices().size()==booking.getVendors().size())
		{
			return true;
		}
		else return false;
	}
	
	
	
	public List<BookingInfoEntity> Showall()
	{
		List<BookingInfoEntity> list=brepo.findAll();
		return list;
	}
	
//	public Optional<BookingInfoEntity> bookEvent(int bookingId)
//	{
//		Optional <BookingInfoEntity> book= brepo.findById(bookingId);
//		
//		List<VendorEntity>vendors=vrepo.findAll();
//		
//		vendors.sort(((o1, o2) -> o2.getVendorRating()-o1.getVendorRating()));
//		
//		int packageId=book.get().getBookingPackageId();
//		
//	Optional<PackageEntity> pack=prepo.findById(packageId);
//		
//	
//	List<ServiceEntity>services=pack.get().getServices();
//	
//	List<Integer>vendorsalloted=new ArrayList<Integer>();
//	
//	for (ServiceEntity packageServiceEntity : services) {
//		
//		for (VendorEntity vendorEntity : vendors) {
//			
//			List<ServiceEntity>slist=vendorEntity.getServices();
//			
//			for (ServiceEntity serviceEntity : slist) {
//				if(vendorsalloted.contains(serviceEntity.getServiceId()))
//				{
//					continue;
//				}
//				else {
//					
//					if(serviceEntity.getServiceId()==packageServiceEntity.getServiceId())
//					{
//						List<BookingInfoEntity> vbooks=vendorEntity.getBookingId();//problem
//						for (BookingInfoEntity vbook : vbooks) {
//							
//							if(vbook.getBookingDate().getDay()!=book.get().getBookingDate().getDay()
//									&& vbook.getBookingDate().getMonth()!=book.get().getBookingDate().getMonth()
//									&& vbook.getBookingDate().getYear()!=book.get().getBookingDate().getYear())
//							{
//								book.get().addVendor(vendorEntity);
//								vendorsalloted.add(vendorEntity.getVendorId());
//								book.get().setBookingStatus(true);
//								break;
//							}
//						}
//						
//						
//						
//					}
//				}
//				
//			}
//		}
//	}
//		return book;
//		
//	}
	
//	
//	public boolean CheckAvailability(int packageId,int bookingId)
//	{
//		Optional<PackageEntity> pack=prepo.findById(packageId);
//		List<ServiceEntity>slist = pack.get().getServices();
//		
//		List<VendorEntity>availabelist=new ArrayList<VendorEntity>();
//		
//		List<VendorEntity>vlist=vrepo.findAll();
//		
//		for (VendorEntity vendorEntity : vlist) {
//			
//			List <ServiceEntity>serlist=vendorEntity.getServices();
//			
//			for (ServiceEntity service : serlist) {
//				if(service.getServiceType().equals("cake"))
//				{
//					availabelist.add(vendorEntity);
//				}
//				
//				if(service.getServiceType().equals("flower"))
//				{
//					availabelist.add(vendorEntity);
//				}
//				
//				if(service.getServiceType().equals("balloon"))
//				{
//					availabelist.add(vendorEntity);
//				}
//			}
//	
//		}
//		int size=availabelist.size();
//		
//		if(size==3)//pack.get().getServices().size()
//		{
//			
//			return true;
//		}
//		else return false;
//		
//	}
	
	
	
}
