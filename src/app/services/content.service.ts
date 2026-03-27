import { Injectable } from '@angular/core';

export interface NavItem {
  label: string;
  fragment: string;
}

export interface ServiceItem {
  iconPath: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string[];
}

export interface ContactInfo {
  phones: string[];
  emails: string[];
  location: string;
  socials: Array<{ platform: string; handle: string; url: string }>;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  readonly navItems: NavItem[] = [
    { label: 'Home', fragment: 'home' },
    { label: 'Services', fragment: 'services' },
    { label: 'About', fragment: 'about' },
    { label: 'Team', fragment: 'team' },
    { label: 'Testimonials', fragment: 'testimonials' },
    { label: 'Contact', fragment: 'contact' }
  ];

  readonly services: ServiceItem[] = [
    {
      iconPath: 'M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.6 6.3-4.1 4.1a1 1 0 0 1-1.4 0L6.3 10.6a1 1 0 0 1 1.4-1.4l1.1 1.1 3.4-3.4a1 1 0 1 1 1.4 1.4Z',
      title: 'One-on-One Guidance',
      description: 'Personalized advising sessions that align your goals, strengths, and university choices.'
    },
    {
      iconPath: 'M4 3a2 2 0 0 0-2 2v10.5A2.5 2.5 0 0 0 4.5 18H15a3 3 0 0 0 3-3V5a2 2 0 0 0-2-2H4Zm2 4h8a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2Zm0 4h5a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2Z',
      title: 'Clear Requirements',
      description: 'Transparent checklists and timelines so applicants know exactly what to prepare and when.'
    },
    {
      iconPath: 'M10 2 2.5 6v5c0 4.1 2.9 7.9 7.5 9 4.6-1.1 7.5-4.9 7.5-9V6L10 2Zm0 3.1L15.5 7v4c0 3.1-2.1 5.9-5.5 6.9-3.4-1-5.5-3.8-5.5-6.9V7L10 5.1Z',
      title: 'Diverse Fields of Study',
      description: 'Opportunities across STEM, social sciences, business, healthcare, and creative disciplines.'
    },
    {
      iconPath: 'M10 1.8a7 7 0 0 0-7 7V12a3 3 0 0 0 3 3h1.2a2.8 2.8 0 0 1 5.6 0H14a3 3 0 0 0 3-3V8.8a7 7 0 0 0-7-7Zm0 2a5 5 0 0 1 5 5V12a1 1 0 0 1-1 1h-1.6a2.8 2.8 0 0 0-4.8 0H6a1 1 0 0 1-1-1V8.8a5 5 0 0 1 5-5Z',
      title: 'Mentorship Opportunities',
      description: 'Learn from experienced mentors who provide career guidance and interview preparation.'
    },
    {
      iconPath: 'M10 2.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM4 17.5c0-2.8 2.7-5 6-5s6 2.2 6 5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z',
      title: 'Networking and Community',
      description: 'Join a supportive student community that fosters growth, collaboration, and global exposure.'
    }
  ];

  readonly team: TeamMember[] = [
    {
      name: 'Tinotenda Murwisi',
      role: 'Chief Executive Officer',
      image: 'assets/images/ceo.jpg',
      bio: [
        'I am Tinotenda Murwisi, Chief Executive Officer of S&B Scholarship Agency, proudly from Zimbabwe and passionate about transforming lives through education.',
        'My focus is empowering talented students from disadvantaged backgrounds by connecting them with scholarships, mentorship, and practical guidance. At S&B, my vision is to build a platform that nurtures leadership, ambition, and long-term success for the next generation.'
      ]
    },
    {
      name: 'Divine Saoneka',
      role: 'Chief Operating Officer',
      image: 'assets/images/coo.jpg',
      bio: [
        'I am Divine Saoneka, Chief Operating Officer of S&B Scholarship Agency, dedicated to ensuring our organization runs efficiently and delivers meaningful opportunities to students.',
        'I lead program coordination, partnership growth, and service delivery so mentorship and scholarship guidance remain accessible and impactful. My goal is to build strong systems that expand opportunity and help students turn ambition into reality.'
      ]
    }
  ];

  readonly contactInfo: ContactInfo = {
    phones: ['+263 77 123 4567', '+263 71 234 5678'],
    emails: ['admissions@sbscholarship.org', 'info@sbscholarship.org'],
    location: 'No. 79 Belvedere Rd, Harare, Office 8',
    socials: [
      { platform: 'TikTok', handle: 'S&B scholarship Agency', url: 'https://vm.tiktok.com/ZS9RoWL2YPL1b-Y66e3/' },
      { platform: 'Facebook', handle: 'Tinotenda Murwski', url: 'https://www.facebook.com/share/1ngub77VyH/' },
      { platform: 'Instagram', handle: 'spencer_agency_consultancy', url: 'https://www.instagram.com/spencer_agency__consultancy?igsh=cnRpNG5yam4wcW81' }
    ]
  };
}
