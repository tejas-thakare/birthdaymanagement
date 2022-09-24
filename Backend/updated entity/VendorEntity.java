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
	
	@Column(name="vendor_approved")
	private Boolean vendorStatus;

	
	@Column(name="vendor_rating")
	private int vendorRating;
	

	public VendorEntity() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Boolean getVendorStatus() {
		return vendorStatus;
	}


	public void setVendorStatus(Boolean vendorStatus) {
		this.vendorStatus = vendorStatus;
	}


	



	public int getVendorRating() {
		return vendorRating;
	}



	public void setVendorRating(int vendorRating) {
		this.vendorRating = vendorRating;
	}



	public VendorEntity(int vendorId) {
		super();
		this.vendorId = vendorId;
	}



	public VendorEntity(@NotNull String vendorLoginId, String vendorPassword) {
		super();
		this.vendorLoginId = vendorLoginId;
		this.vendorPassword = vendorPassword;
	}



	public VendorEntity(@NotNull String vendorName, @NotNull long vendorContactNo, @NotNull String vendorEmail,
			@NotNull String vendorLoginId, String vendorPassword) {
		super();
		this.vendorName = vendorName;
		this.vendorContactNo = vendorContactNo;
		this.vendorEmail = vendorEmail;
		this.vendorLoginId = vendorLoginId;
		this.vendorPassword = vendorPassword;
		this.vendorStatus=false;
	}



	public boolean isVendorStatus() {
		return vendorStatus;
	}


	public void setVendorStatus(boolean vendorStatus) {
		this.vendorStatus = vendorStatus;
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

	
	
}
