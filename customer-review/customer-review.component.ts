import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.css']
})
export class CustomerReviewComponent {
  customerName: string;
  review: string;

  constructor(private http: HttpClient) {
    this.customerName = '';
    this.review = '';
  }

  submitReview() {
    const data = {
      customerName: this.customerName,
      review: this.review
    };
    this.http.post('http://localhost:3000', data).subscribe(() => {
      alert('Review submitted successfully!');
      this.customerName = '';
      this.review = '';
    });
  }
}
