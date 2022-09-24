package project.entity;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="booking_info_table")
public class BookingInfoEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="booking_number")
	private int booking_number;
	
	
	@Column(name="booking_date")
	private Date bookingDate;
	
	@Column(name="booking_amount")
	private double bookingAmount;
	
	@Column(name="booking_status")
	private Boolean bookingStatus;

	@OneToOne
	private UserEntity BookingUser;

	@OneToOne
	private VenueEntity BookingVenue;
	
	@OneToMany
	private List<VendorEntity> Vendors;

	@OneToMany
	private List<ServiceEntity> Services;
	
	@OneToOne
	private PackageEntity Package;
	


	public BookingInfoEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	


	public int getBooking_number() {
		return booking_number;
	}

	public void setBooking_number(int booking_number) {
		this.booking_number = booking_number;
	}

	
	public VenueEntity getBookingVenue() {
		return BookingVenue;
	}




	public void setBookingVenue(VenueEntity bookingVenue) {
		BookingVenue = bookingVenue;
	}




	public List<VendorEntity> getVendors() {
		return Vendors;
	}




	public void setVendors(List<VendorEntity> vendors) {
		Vendors = vendors;
	}




	public List<ServiceEntity> getServices() {
		return Services;
	}




	public void setServices(List<ServiceEntity> services) {
		Services = services;
	}




	public PackageEntity getPackage() {
		return Package;
	}




	public void setPackage(PackageEntity package1) {
		Package = package1;
	}




	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	public double getBookingAmount() {
		return bookingAmount;
	}

	public void setBookingAmount(double bookingAmount) {
		this.bookingAmount = bookingAmount;
	}

	public Boolean getBookingStatus() {
		return bookingStatus;
	}

	public void setBookingStatus(Boolean bookingStatus) {
		this.bookingStatus = bookingStatus;
	}

	public UserEntity getBookingUser() {
		return BookingUser;
	}

	public void setBookingUser(UserEntity bookingUser) {
		BookingUser = bookingUser;
	}


	public void addVendor(VendorEntity vendor)
	{
		this.Vendors.add(vendor);
	}
	
	
}
