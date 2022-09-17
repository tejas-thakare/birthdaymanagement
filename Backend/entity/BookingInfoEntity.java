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
	
	@Column(name="booking_venue_id")
	private int bookingVenueId;
	
	@Column(name="booking_package_id")
	private int bookingPackageId;
	
	@Column(name="booking_date")
	private Date bookingDate;
	
	@Column(name="booking_amount")
	private double bookingAmount;
	
	@Column(name="booking_status")
	private Boolean bookingStatus;

	@OneToOne
	@JoinColumn(name="booking_user_id")
	private UserEntity BookingUser;

	@ManyToMany
	private List<VendorEntity>vendors;
	
	
	

	public BookingInfoEntity( int bookingPackageId, Date bookingDate, double bookingAmount,
			Boolean bookingStatus, UserEntity bookingUser) {
		super();
		
		this.bookingPackageId = bookingPackageId;
		this.bookingDate = bookingDate;
		this.bookingAmount = bookingAmount;
		this.bookingStatus = bookingStatus;
		BookingUser = bookingUser;
	}




	public BookingInfoEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	


	public List<VendorEntity> getVendors() {
		return vendors;
	}

	public void setVendors(List<VendorEntity> vendors) {
		this.vendors = vendors;
	}

	public int getBooking_number() {
		return booking_number;
	}

	public void setBooking_number(int booking_number) {
		this.booking_number = booking_number;
	}

	public int getBookingPackageId() {
		return bookingPackageId;
	}

	public void setBookingPackageId(int bookingPackageId) {
		this.bookingPackageId = bookingPackageId;
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
		this.vendors.add(vendor);
	}

	
	
}
