import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Michael Agyei-Kane | Software Developer';

  name = 'Michael Agyei-Kane';
  role = 'Full-Stack Developer';
  location = 'Paris, France';
  summary = 'Full-stack developer committed to engineering excellence. Seeking an end-of-studies (6 months) internship starting October 2026. Experienced in building scalable web applications with Angular, NestJS, and .NET, with a strong focus on automated testing and robust backend architecture.';

  navLinks = [
    { label: 'About', url: '#about' },
    { label: 'Experience', url: '#experience' },
    { label: 'Projects', url: '#projects' },
    { label: 'Skills', url: '#skills' },
    { label: 'Contact', url: '#contact' }
  ];

  experiences = [
    {
      role: 'Full-Stack Developer',
      company: 'BNP Paribas Asset Management',
      location: 'Puteaux, France',
      period: 'April 2026 – October 2026',
      tasks: [
        'Developed web interfaces for trading features using Angular.',
        'Engineered backend services and RESTful APIs.',
        'Implemented automated end-to-end tests using Playwright to ensure application quality.'
      ]
    },
    {
      role: 'WordPress Frontend Developer',
      company: '1up Media Digital Agency',
      location: 'Remote',
      period: 'February 2025 – May 2025',
      tasks: [
        'Developed and maintained client websites with a focus on high performance and SEO.',
        'Optimized site architecture to enhance user traffic and engagement.'
      ]
    },
    {
      role: 'Backend Developer Intern',
      company: 'HNG Tech',
      location: 'Remote',
      period: 'June 2024 – August 2024',
      tasks: [
        'Integrated Paystack API for seamless online payment processing.',
        'Implemented OAuth authentication.'
      ]
    }
  ];

  education = [
    {
      degree: 'Master of Science in Software Engineering',
      school: 'JUNIA ISEN',
      location: 'Lille, France',
      period: 'September 2024 – February 2026'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'KNUST',
      location: 'Ghana',
      period: 'January 2021 – September 2024'
    }
  ];

  skills = [
    { category: 'Languages', items: ['TypeScript', 'C#', 'Java'] },
    { category: 'Frontend', items: ['Angular'] },
    { category: 'Backend', items: ['NestJS', '.NET'] },
    { category: 'Testing', items: ['Playwright', 'Cypress'] },
    { category: 'Tools', items: ['Microsoft Azure', 'Git/GitHub', 'SQL Server'] }
  ];

  projects = [
    {
      title: 'AI Integration Plugin for Lymphoma Analysis',
      tech: 'Java, QuPath',
      description: 'Java plugin for QuPath enhancing AI-based detection of lymphoma.',
      link: 'https://github.com/mikekane007'
    },
    {
      title: 'ERA-KNUST | Educational Marketplace',
      tech: 'Full-Stack',
      description: 'Full-stack educational marketplace platform facilitating student trading.',
      link: 'https://github.com/mikekane007'
    },
    {
      title: 'Xianess Clothing Ecommerce',
      tech: 'E-commerce',
      description: 'Full-featured ecommerce store featuring modern payment integration.',
      link: 'https://github.com/mikekane007'
    },
    {
      title: 'Mels Juices',
      tech: 'E-commerce',
      description: 'Simple ecommerce store featuring modern payment integration.',
      link: 'https://mels-juice.vercel.app/'
    }
  ];

  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitted = false;
  submitMessage = '';
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  onSubmit() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      console.log('Contact form submission:', this.contactForm);
      this.isSubmitted = true;
      this.submitMessage = `Thank you, ${this.contactForm.name}! Your message has been sent.`;

      this.contactForm = { name: '', email: '', message: '' };

      setTimeout(() => {
        this.isSubmitted = false;
        this.submitMessage = '';
      }, 6000);
    }
  }
}
