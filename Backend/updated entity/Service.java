package project.entity;

public class Service {

	String vendorId;
	
	String serviceType;
	
	int serviceCost;

	public Service(String vendorId, String serviceType, int serviceCost) {
		super();
		this.vendorId = vendorId;
		this.serviceType = serviceType;
		this.serviceCost = serviceCost;
	}

	public String getVendorId() {
		return vendorId;
	}

	public void setVendorId(String vendorId) {
		this.vendorId = vendorId;
	}

	public String getServiceType() {
		return serviceType;
	}

	public void setServiceType(String serviceType) {
		this.serviceType = serviceType;
	}

	public int getServiceCost() {
		return serviceCost;
	}

	public void setServiceCost(int serviceCost) {
		this.serviceCost = serviceCost;
	}
	
	
}
