package project.entity;

import java.sql.Date;

public class Book {

	int userId;
	int packageId;
	int venueId;
	double amount;
	Date date;
	public Book(int userId, int packageId, int venueId, double amount, Date date) {
		super();
		this.userId = userId;
		this.packageId = packageId;
		this.venueId = venueId;
		this.amount = amount;
		this.date = date;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getPackageId() {
		return packageId;
	}
	public void setPackageId(int packageId) {
		this.packageId = packageId;
	}
	public int getVenueId() {
		return venueId;
	}
	public void setVenueId(int venueId) {
		this.venueId = venueId;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	
}
