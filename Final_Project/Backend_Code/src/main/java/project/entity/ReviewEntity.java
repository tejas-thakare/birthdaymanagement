package project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="review_info_table")
public class ReviewEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="review_no")
	private int review_no;
	
	@Column(name="review_text")
	private String reviewText;
	
	@Column(name="review_rating")
	private int reviewRating;

	@ManyToOne
	@JoinColumn(name="review_user_id")
	private UserEntity ReviewUser;


	public ReviewEntity() {
		super();
		// TODO Auto-generated constructor stub
	}


	public ReviewEntity(String reviewText, int reviewRating, UserEntity reviewUser) {
		super();
		this.reviewText = reviewText;
		this.reviewRating = reviewRating;
		ReviewUser = reviewUser;
	}


	public int getReview_no() {
		return review_no;
	}


	public void setReview_no(int review_no) {
		this.review_no = review_no;
	}


	public String getReviewText() {
		return reviewText;
	}


	public void setReviewText(String reviewText) {
		this.reviewText = reviewText;
	}


	public int getReviewRating() {
		return reviewRating;
	}


	public void setReviewRating(int reviewRating) {
		this.reviewRating = reviewRating;
	}


	public UserEntity getReviewUser() {
		return ReviewUser;
	}


	public void setReviewUser(UserEntity reviewUser) {
		ReviewUser = reviewUser;
	}


	


	

	
}
