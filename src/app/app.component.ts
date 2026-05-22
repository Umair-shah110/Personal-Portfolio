import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Umair.dev';
  heroImage = '/Image.jpg';
  laptopImage = '/laptop png.png';
  emailImage = '/email png.png';

  readonly navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  readonly socialLinks = [
    { label: 'LinkedIn', iconClass: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com' },
    { label: 'GitHub', iconClass: 'fa-brands fa-github', href: 'https://github.com' },
    { label: 'Email', iconClass: 'fa-solid fa-envelope', href: 'mailto:umair@gmail.com' }
  ];

  readonly heroIcons = [
    { label: 'Java', iconClass: 'devicon-java-plain colored', className: 'hero-java' },
    { label: 'React', iconClass: 'devicon-react-original colored', className: 'hero-react' },
    { label: 'Spring Boot', iconClass: 'devicon-spring-plain colored', className: 'hero-spring' },
    { label: 'JavaScript', iconClass: 'devicon-javascript-plain colored', className: 'hero-js' },
    { label: 'Angular', iconClass: 'devicon-angularjs-plain colored', className: 'hero-angular' },
    { label: 'NestJS', iconClass: 'devicon-nestjs-plain colored', className: 'hero-nest' }
  ];

  readonly techCards = [
    { label: 'Java', iconClass: 'devicon-java-plain colored' },
    { label: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
    { label: 'NestJS', iconClass: 'devicon-nestjs-plain colored' },
    { label: 'React.js', iconClass: 'devicon-react-original colored' },
    { label: 'HTML', iconClass: 'devicon-html5-plain colored' },
    { label: 'CSS', iconClass: 'devicon-css3-plain colored' },
    { label: 'Bootstrap', iconClass: 'devicon-bootstrap-plain colored' },
    { label: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-original colored' },
    { label: 'Postman', iconClass: 'devicon-postman-plain colored', sublabel: 'API Testing' },
    { label: 'Angular', iconClass: 'devicon-angularjs-plain colored' },
    { label: 'Spring Boot', iconClass: 'devicon-spring-plain colored' },
    { label: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
    { label: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
    { label: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
    { label: 'Git', iconClass: 'devicon-git-plain colored' },
    { label: 'GitHub', iconClass: 'devicon-github-original' }
  ];

  readonly aboutBadges = [
    { iconClass: 'fa-regular fa-calendar', title: '2+', text: 'Years Experience' },
    { iconClass: 'fa-solid fa-code', title: 'Frontend +', text: 'Backend' },
    { iconClass: 'fa-solid fa-rocket', title: 'Production-', text: 'Level APIs' }
  ];

  readonly projects = [
    {
      title: 'E-Commerce Website',
      description: 'A mini e-commerce project with product listings, cart flows, and responsive UI.',
      tags: ['React', 'Spring Boot', 'MySQL'],
      iconClass: 'fa-solid fa-cart-shopping',
      badgeClass: 'project-cart'
    },
    {
      title: 'KFC Clone',
      description: 'A frontend clone project recreating the KFC website experience.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      logoText: 'KFC',
      badgeClass: 'project-kfc'
    },
    {
      title: 'Amazon Clone',
      description: 'An e-commerce clone with modern UI sections and shopping-style layout.',
      tags: ['React', 'Tailwind CSS', 'API'],
      logoText: 'a',
      badgeClass: 'project-amazon'
    },
    {
      title: 'Login Pages & Mini Projects',
      description: 'A collection of login pages and small practice projects built for learning and side work.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      iconClass: 'fa-solid fa-code',
      badgeClass: 'project-login'
    }
  ];

  readonly experienceCards = [
    {
      iconClass: 'fa-solid fa-briefcase',
      title: '2+ Years Experience',
      text: 'Over 2 years of hands-on experience in full stack development.'
    },
    {
      iconClass: 'fa-solid fa-code',
      title: 'Worked on both Frontend and Backend',
      text: 'Built and maintained features across client-side and server-side stacks.'
    },
    {
      iconClass: 'fa-solid fa-gear',
      title: 'Built production-level APIs in Spring Boot and NestJS',
      text: 'Designed secure, scalable, and high-performance RESTful APIs.'
    },
    {
      iconClass: 'fa-solid fa-desktop',
      title: 'Built decent websites in React and Angular',
      text: 'Created responsive, user-friendly interfaces with great user experience.'
    }
  ];

  readonly contactItems = [
    { iconClass: 'fa-regular fa-envelope', value: 'umair@gmail.com', href: 'mailto:umair@gmail.com' },
    { iconClass: 'fa-solid fa-phone', value: '03483131122', href: 'tel:+92023456' },
    { iconClass: 'fa-solid fa-location-dot', value: 'Thatta, Pakistan' }
  ];
}
