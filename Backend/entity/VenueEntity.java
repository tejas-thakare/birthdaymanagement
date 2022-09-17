package project.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import javax.validation.constraints.NotNull;

@Entity
@Table(name="venue_info_table")
public class VenueEntity {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="venue_id")
	private int venueId;
	
	@NotNull
	@Column(name="venue_name")
	private String venueName;
	
	
	@Column(name="venue_contact")
	private long venueContact;

	@Column(name="venue_location")
	private String venueLocation;
	
	@Column(name="venue_cost")
	private int venueCost;

	@Column(name="venue_rating")
	private int venueRating;

	@ManyToMany
	@JoinColumn(name="venue_vendors")
	private List<VendorEntity>vendors;
	
	public VenueEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public VenueEntity(@NotNull String venueName, long venueContact, String venueLocation, int venueCost,
			int venueRating, List<VendorEntity> vendors) {
		super();
		this.venueName = venueName;
		this.venueContact = venueContact;
		this.venueLocation = venueLocation;
		this.venueCost = venueCost;
		this.venueRating = venueRating;
		this.vendors = vendors;
	}

	public int getVenueId() {
		return venueId;
	}

	public void setVenueId(int venueId) {
		this.venueId = venueId;
	}

	public String getVenueName() {
		return venueName;
	}

	public void setVenueName(String venueName) {
		this.venueName = venueName;
	}

	public long getVenueContact() {
		return venueContact;
	}

	public void setVenueContact(long venueContact) {
		this.venueContact = venueContact;
	}

	public String getVenueLocation() {
		return venueLocation;
	}

	public void setVenueLocation(String venueLocation) {
		this.venueLocation = venueLocation;
	}

	public int getVenueCost() {
		return venueCost;
	}

	public void setVenueCost(int venueCost) {
		this.venueCost = venueCost;
	}

	public int getVenueRating() {
		return venueRating;
	}

	public void setVenueRating(int venueRating) {
		this.venueRating = venueRating;
	}

	public List<VendorEntity> getVendors() {
		return vendors;
	}

	public void setVendors(List<VendorEntity> vendors) {
		this.vendors = vendors;
	}

	

}
