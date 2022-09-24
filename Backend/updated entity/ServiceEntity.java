package project.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Id;

import javax.persistence.Lob;

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
	
	@OneToMany
	private List<PackageEntity>packages;
	
	@OneToMany
	private List<VendorEntity>vendors;
	
	public ServiceEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<PackageEntity> getPackages() {
		return packages;
	}

	public void setPackages(List<PackageEntity> packages) {
		this.packages = packages;
	}


	public ServiceEntity(int vendorId,String serviceType, int serviceCost) {
		super();
		this.serviceType = serviceType;
		this.serviceCost = serviceCost;
	}

	
	

	public List<VendorEntity> getVendors() {
		return vendors;
	}

	public void setVendors(List<VendorEntity> vendors) {
		this.vendors = vendors;
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

	
	public void addVendor(VendorEntity vendor)
	{
		this.vendors.add(vendor);
	}


	
}
