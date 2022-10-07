package project.entity;

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
import javax.validation.constraints.NotNull;

@Entity
@Table(name="vendor_info_table")
public class VendorEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="vendor_id")
	private int vendorId;
	
	@NotNull
	@Column(name="vendor_name")
	private String vendorName;
	
	@NotNull
	@Column(name="vendor_contact_No")
	private long vendorContactNo;
	
	@NotNull
	@Column(name="vendor_email")
	private String vendorEmail;
	
	@NotNull
	@Column(name="vendor_login_id")
	private String vendorLoginId;
	
	@Column(name="vendor_password")
	private String vendorPassword;
	
	@ManyToMany
	@JoinColumn(name="vendor_service_id")
	private List<ServiceEntity> Services;
	
	@ManyToMany
	private List<VenueEntity> venues;
	
	@OneToOne
	@JoinColumn(name="vendor_package_id")
	private PackageEntity VendorPackage;
	
	@Column(name="vendor_rating")
	private int vendorRating;

	public VendorEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public VendorEntity(@NotNull String vendorName, @NotNull long vendorContactNo, @NotNull String vendorEmail,
			@NotNull String vendorLoginId, String vendorPassword, List<ServiceEntity> services,
			List<VenueEntity> venues, PackageEntity vendorPackage, int vendorRating) {
		super();
		this.vendorName = vendorName;
		this.vendorContactNo = vendorContactNo;
		this.vendorEmail = vendorEmail;
		this.vendorLoginId = vendorLoginId;
		this.vendorPassword = vendorPassword;
		Services = services;
		this.venues = venues;
		VendorPackage = vendorPackage;
		this.vendorRating = vendorRating;
	}

	public int getVendorId() {
		return vendorId;
	}

	public void setVendorId(int vendorId) {
		this.vendorId = vendorId;
	}

	public String getVendorName() {
		return vendorName;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}

	public long getVendorContactNo() {
		return vendorContactNo;
	}

	public void setVendorContactNo(long vendorContactNo) {
		this.vendorContactNo = vendorContactNo;
	}

	public String getVendorEmail() {
		return vendorEmail;
	}

	public void setVendorEmail(String vendorEmail) {
		this.vendorEmail = vendorEmail;
	}

	public String getVendorLoginId() {
		return vendorLoginId;
	}

	public void setVendorLoginId(String vendorLoginId) {
		this.vendorLoginId = vendorLoginId;
	}

	public String getVendorPassword() {
		return vendorPassword;
	}

	public void setVendorPassword(String vendorPassword) {
		this.vendorPassword = vendorPassword;
	}

	public List<ServiceEntity> getServices() {
		return Services;
	}

	public void setServices(List<ServiceEntity> services) {
		Services = services;
	}

	public List<VenueEntity> getVenues() {
		return venues;
	}

	public void setVenues(List<VenueEntity> venues) {
		this.venues = venues;
	}

	public PackageEntity getVendorPackage() {
		return VendorPackage;
	}

	public void setVendorPackage(PackageEntity vendorPackage) {
		VendorPackage = vendorPackage;
	}

	public int getVendorRating() {
		return vendorRating;
	}

	public void setVendorRating(int vendorRating) {
		this.vendorRating = vendorRating;
	}

	

	
}
