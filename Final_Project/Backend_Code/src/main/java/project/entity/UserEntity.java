package project.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="user_info_table")
public class UserEntity {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="user_id")
	private int userId;
	
	@NotNull
	@Column(name="user_firstName")
	private String userFirstName;
	
	@NotNull
	@Column(name="user_lastName")
	private String userLastName;
	
	@NotNull
	@Column(name="user_contactNo")
	private double userContactNo;
	
	@NotNull
	@Column(name="user_email")
	private String userEmail;
	
	@NotNull
	@Column(name="user_login_id")
	private String userLoginId;
	
	@NotNull
	@Column(name="user_password")
	private String userPassword;

	@OneToMany(mappedBy="BillingUser")
	private List <BillingEntity>Bills;

	@OneToMany(mappedBy="BookingUser")
	private List <BookingInfoEntity>Bookings;
	
	@OneToMany(mappedBy="ReviewUser")
	private List<ReviewEntity>reviews;

	
	public UserEntity() {
		super();
		// TODO Auto-generated constructor stub
	}


	public UserEntity(@NotNull String userFirstName, @NotNull String userLastName, @NotNull double userContactNo,
			@NotNull String userEmail, @NotNull String userLoginId, @NotNull String userPassword,
			List<BillingEntity> bills, List<ReviewEntity> reviews) {
		super();
		this.userFirstName = userFirstName;
		this.userLastName = userLastName;
		this.userContactNo = userContactNo;
		this.userEmail = userEmail;
		this.userLoginId = userLoginId;
		this.userPassword = userPassword;
		Bills = bills;
		this.reviews = reviews;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public String getUserFirstName() {
		return userFirstName;
	}


	public void setUserFirstName(String userFirstName) {
		this.userFirstName = userFirstName;
	}


	public String getUserLastName() {
		return userLastName;
	}


	public void setUserLastName(String userLastName) {
		this.userLastName = userLastName;
	}


	public double getUserContactNo() {
		return userContactNo;
	}


	public void setUserContactNo(double userContactNo) {
		this.userContactNo = userContactNo;
	}


	public String getUserEmail() {
		return userEmail;
	}


	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}


	public String getUserLoginId() {
		return userLoginId;
	}


	public void setUserLoginId(String userLoginId) {
		this.userLoginId = userLoginId;
	}


	public String getUserPassword() {
		return userPassword;
	}


	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}


	public List<BillingEntity> getBills() {
		return Bills;
	}


	public void setBills(List<BillingEntity> bills) {
		Bills = bills;
	}


	public List<BookingInfoEntity> getBookings() {
		return Bookings;
	}


	public void setBookings(List<BookingInfoEntity> bookings) {
		Bookings = bookings;
	}


	public List<ReviewEntity> getReviews() {
		return reviews;
	}


	public void setReviews(List<ReviewEntity> reviews) {
		this.reviews = reviews;
	}
	
	


	

	
	
	

	
}
