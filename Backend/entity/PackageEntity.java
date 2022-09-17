package project.entity;



import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="package_info_table")
public class PackageEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="package_id")
	private int packageId;
	
	@NotNull
	@Column(name="package_name")
	private String packageName;
	
	@OneToMany(mappedBy="PackageId")
	private List<ServiceEntity>services;
	
	
	@NotNull
	@Column(name="package_cost")
	private int packageCost;

	
	public PackageEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public PackageEntity(@NotNull String packageName, @NotNull int packageCost) {
		super();
		this.packageName = packageName;
		this.packageCost = packageCost;
	}



	public PackageEntity(int packageId, @NotNull String packageName, List<ServiceEntity> services,
			@NotNull int packageCost) {
		super();
		this.packageId = packageId;
		this.packageName = packageName;
		this.services = services;
		this.packageCost = packageCost;
	}


	public int getPackageId() {
		return packageId;
	}


	public void setPackageId(int packageId) {
		this.packageId = packageId;
	}


	public String getPackageName() {
		return packageName;
	}


	public void setPackageName(String packageName) {
		this.packageName = packageName;
	}


	public List<ServiceEntity> getServices() {
		return services;
	}


	public void setServices(List<ServiceEntity> services) {
		this.services = services;
	}


	public int getPackageCost() {
		return packageCost;
	}


	public void setPackageCost(int packageCost) {
		this.packageCost = packageCost;
	}

	
	

	
	

	

}
