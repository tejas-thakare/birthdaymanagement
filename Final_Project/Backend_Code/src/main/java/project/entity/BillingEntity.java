package project.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

@Entity
@Table(name="billing_info_table")
public class BillingEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="billing_id")
	private int billingId;
	
	@Column(name="billing_extra_charges")
	private double billingExtraCharges;
	
	@Column(name="billing_total_cost")
	private double billingTotalCost;
	
	@Column(name="billing_date")
	private Date billingDate;
	
	@Column(name="billing_booking_id")
	private int billingBookingId;



	@ManyToOne
	@JoinColumn(name="billing_user_id")
	private UserEntity BillingUser;

	public BillingEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BillingEntity(double billingExtraCharges, double billingTotalCost, Date billingDate, int billingBookingId,
			UserEntity billingUser) {
		super();
		this.billingExtraCharges = billingExtraCharges;
		this.billingTotalCost = billingTotalCost;
		this.billingDate = billingDate;
		this.billingBookingId = billingBookingId;
		BillingUser = billingUser;
	}

	public int getBillingId() {
		return billingId;
	}

	public void setBillingId(int billingId) {
		this.billingId = billingId;
	}

	public double getBillingExtraCharges() {
		return billingExtraCharges;
	}

	public void setBillingExtraCharges(double billingExtraCharges) {
		this.billingExtraCharges = billingExtraCharges;
	}

	public double getBillingTotalCost() {
		return billingTotalCost;
	}

	public void setBillingTotalCost(double billingTotalCost) {
		this.billingTotalCost = billingTotalCost;
	}

	public Date getBillingDate() {
		return billingDate;
	}

	public void setBillingDate(Date billingDate) {
		this.billingDate = billingDate;
	}

	public int getBillingBookingId() {
		return billingBookingId;
	}

	public void setBillingBookingId(int billingBookingId) {
		this.billingBookingId = billingBookingId;
	}

	public UserEntity getBillingUser() {
		return BillingUser;
	}

	public void setBillingUser(UserEntity billingUser) {
		BillingUser = billingUser;
	}

	

	
	
	
	
	

}
