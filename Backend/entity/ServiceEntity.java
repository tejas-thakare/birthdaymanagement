package project.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="service_info_table")
public class ServiceEntity {
	@Id
	@Column(name="service_id")
	private int serviceId;
	
	@Column(name="service_type")
	private String serviceType;
	
	@Lob
	@Column(name="service_images")
	private byte serviceImages;
	
	@Column(name="service_details")
	private String serviceDetails;
	
	@Column(name="service_cost")
	private int serviceCost;
	
//	@Column(name="service_approved")
//	private boolean approved;
	
	@ManyToMany
	private List<VendorEntity>vendors;
	
	@ManyToOne
	@JoinColumn(name="service_package_id")
	private PackageEntity PackageId;

	public ServiceEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ServiceEntity(int serviceId, String serviceType, byte serviceImages, String serviceDetails, int serviceCost,
			List<VendorEntity> vendors, PackageEntity packageId) {
		super();
		this.serviceId = serviceId;
		this.serviceType = serviceType;
		this.serviceImages = serviceImages;
		this.serviceDetails = serviceDetails;
		this.serviceCost = serviceCost;
		this.vendors = vendors;
		PackageId = packageId;
	}

	public int getServiceId() {
		return serviceId;
	}

	public void setServiceId(int serviceId) {
		this.serviceId = serviceId;
	}

	public String getServiceType() {
		return serviceType;
	}

	public void setServiceType(String serviceType) {
		this.serviceType = serviceType;
	}

	public byte getServiceImages() {
		return serviceImages;
	}

	public void setServiceImages(byte serviceImages) {
		this.serviceImages = serviceImages;
	}

	public String getServiceDetails() {
		return serviceDetails;
	}

	public void setServiceDetails(String serviceDetails) {
		this.serviceDetails = serviceDetails;
	}

	public int getServiceCost() {
		return serviceCost;
	}

	public void setServiceCost(int serviceCost) {
		this.serviceCost = serviceCost;
	}

	public List<VendorEntity> getVendors() {
		return vendors;
	}

	public void setVendors(List<VendorEntity> vendors) {
		this.vendors = vendors;
	}

	public PackageEntity getPackageId() {
		return PackageId;
	}

	public void setPackageId(PackageEntity packageId) {
		PackageId = packageId;
	}


	
}
