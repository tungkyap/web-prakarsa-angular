import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  // Replace with your actual Formspree endpoint
  private formspreeUrl ='https://formspree.io/f/mpwjpgyo';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      projectType: ['', Validators.required],
      message: ['', Validators.required],
      consent: [false]
    });
  }

  ngOnInit(): void {
    window.scroll(0,0);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitError = false;

      // Prepare form data for Formspree
      const formData = {
        firstName: this.contactForm.get('firstName')?.value,
        lastName: this.contactForm.get('lastName')?.value,
        email: this.contactForm.get('email')?.value,
        phone: this.contactForm.get('phone')?.value,
        projectType: this.contactForm.get('projectType')?.value,
        message: this.contactForm.get('message')?.value,
        consent: this.contactForm.get('consent')?.value,
        _subject: `New Construction Inquiry from ${this.contactForm.get('firstName')?.value} ${this.contactForm.get('lastName')?.value}`,
        _replyto: this.contactForm.get('email')?.value
      };

      // Submit to Formspree
      this.http.post(this.formspreeUrl, formData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.contactForm.reset();

          // Hide success message after 5 seconds
          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submitError = true;
          this.errorMessage = 'There was an error sending your message. Please try again or contact us directly.';
          console.error('Form submission error:', error);

          // Hide error message after 7 seconds
          setTimeout(() => {
            this.submitError = false;
          }, 7000);
        }
      });
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
