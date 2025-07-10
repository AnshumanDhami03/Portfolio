
export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Tech Stack', href: '#tech-stack'},
  { name: 'Projects', href: '#projects' },
];

export const SOCIAL_LINKS = {
    github: 'https://github.com/AnshumanDhami03',
    linkedin: 'https://www.linkedin.com/in/anshuman-dhami-546078229/',
    gmail: 'dhamianshuman@gmail.com',
};

export const EXPERIENCES = [
  {
    year: 'Sep 2023 — Oct 2023',
    company: 'Bharat Intern',
    companyUrl: '#',
    role: 'Application Development Engineer (Part-time, Remote)',
    description: 'Completed a virtual internship focused on mobile app development fundamentals. Designed and developed interactive Android applications using Java/Kotlin and XML. Gained hands-on experience in UI/UX design, Firebase integration, and API handling.',
    skills: ['Android', 'Java', 'Kotlin', 'XML', 'Firebase', 'API Integration'],
    certificateUrl: 'https://drive.google.com/uc?export=download&id=1EBJFhMZawidJ7k1CgNiT5P0oN5Zsy1xS',
    certificateImageUrl: 'https://i.postimg.cc/25bjs7Vr/Screenshot-2025-07-10-174026.png',
  },
  {
    year: 'Feb 2022 — Apr 2022',
    company: 'College Rollup',
    companyUrl: '#',
    role: 'Graphic Designer Intern',
    description: 'Designed company’s Instagram posts, enhancing social media presence. Assisted in creating market-appealing graphics.',
    skills: ['Graphic Design', 'Social Media Marketing', 'Canva', 'Figma'],
    certificateUrl: 'https://drive.google.com/uc?export=download&id=1f2OVXGpti9Bzt5ZNL1ZocTi7qfkNdVkM',
    certificateImageUrl: 'https://i.postimg.cc/MprK3FZ9/Screenshot-2025-07-10-174601.png',
  },
];

export const PROJECTS = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform with a custom CMS, product management, and secure payment processing. Built with a focus on performance and scalability.',
        imageUrl: 'https://placehold.co/200x112.png',
        imageHint: 'e-commerce website',
        tech: ['Next.js', 'TypeScript', 'Stripe', 'GraphQL', 'PostgreSQL'],
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        title: 'Project Management Tool',
        description: 'A web application that helps teams manage projects, track tasks, and collaborate effectively. Features include drag-and-drop boards, real-time updates, and reporting.',
        imageUrl: 'https://placehold.co/200x112.png',
        imageHint: 'dashboard management',
        tech: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'Express.js'],
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        title: 'AI Content Generator',
        description: 'A SaaS platform that leverages AI to generate high-quality marketing copy, blog posts, and social media content. Integrated with OpenAI API.',
        imageUrl: 'https://placehold.co/200x112.png',
        imageHint: 'modern application',
        tech: ['SvelteKit', 'Firebase', 'OpenAI API', 'Tailwind CSS'],
        liveUrl: '#',
        githubUrl: null,
    },
];

export const CATEGORIZED_TECH_STACK = [
    {
        category: 'Programming Languages',
        skills: [
            { name: 'Java', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.83,14.83c.37-1.17.08-2.45-.8-3.33s-2.16-1.17-3.33-.8a4.42,4.42,0,0,0-3.33,4.13,4.42,4.42,0,0,0,4.13,4.5,4.42,4.42,0,0,0,4.5-4.13A4.42,4.42,0,0,0,14.83,14.83Zm-1.5,1.5a2.1,2.1,0,0,1-2.63,2.63,2.1,2.1,0,0,1-2.63-2.63,2.1,2.1,0,0,1,2.63-2.63A2.1,2.1,0,0,1,13.33,16.33Zm4.5-8.66a2.52,2.52,0,0,0,.67-1.5,2.77,2.77,0,0,0-2.84-2.84,2.52,2.52,0,0,0-1.5.67C13.25,2.42,12.5,2,11,2,7.14,2,4,5.14,4,9v6a1,1,0,0,0,1,1H9v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V16h2a1,1,0,0,0,1-1s0,0,0,0V9C20,7.19,19,5.5,17.83,4.17ZM18,14H10a1,1,0,0,0,0,2h3v3H11V16a5,5,0,0,1-5-5V9c0-2.76,2.24-5,5-5s5,2.24,5,5v5Z"/></svg>' },
            { name: 'Python', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16,16a5,5,0,0,1-5,5H9a5,5,0,0,1-5-5V9A5,5,0,0,1,9,4h2a5,5,0,0,1,5,5v2a1,1,0,0,0,2,0V9a5,5,0,0,1,5-5h2a5,5,0,0,1,5,5v2a5,5,0,0,1-5,5H17a1,1,0,0,0,0,2h2a5,5,0,0,1,5,5v2a5,5,0,0,1-5,5H16Zm-2-7a3,3,0,0,0-3-3H9A3,3,0,0,0,6,9v6a3,3,0,0,0,3,3h2a3,3,0,0,0,3-3Zm10-2a3,3,0,0,0,3-3V9a3,3,0,0,0-3-3H16a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3Z"/></svg>' },
            { name: 'JavaScript', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0,0H24V24H0Z" fill="none"/><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM11.25,9.75H9.75V11.5h1.5Zm3,0H12.75V11.5h1.5Zm3,0H15.75V11.5h1.5ZM10,15.25H8.5v-1.5H10Zm4.5,0H13v-1.5h1.5Z"/></svg>' },
            { name: 'PHP', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A10,10,0,0,0,2,12a10,10,0,0,0,10,10c5.21,0,9.53-3.96,9.95-9H12Zm-1.42,5a1,1,0,0,1,.9-1.4,1,1,0,0,1,1.4.9l-2,5a1,1,0,0,1-1.8,0ZM9,14.5a2.5,2.5,0,1,1,2.5,2.5A2.5,2.5,0,0,1,9,14.5Zm6,0a2.5,2.5,0,1,1,2.5,2.5A2.5,2.5,0,0,1,15,14.5Z"/></svg>' },
            { name: 'SQL', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>' },
        ]
    },
    {
        category: 'Frontend & Frameworks',
        skills: [
            { name: 'HTML5', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2,4v16h20V4Zm18,14H4V6H20ZM8,10h2v4H8Zm6,0h2v4H14Zm-3,0h2v4H11Z"/></svg>' },
            { name: 'CSS3', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A10,10,0,0,0,2,12a10,10,0,0,0,10,10,10,10,0,0,0,10-10A10,10,0,0,0,12,2ZM11,17H8l1-4H6l3-7,4,4H10Zm2-2a2,2,0,1,1,2-2A2,2,0,0,1,13,15Z"/></svg>' },
            { name: 'Tailwind CSS', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>' },
            { name: 'React.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-atom"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-5.91-2.82-8.75-2.86-2.86-6.74-4.88-8.77-2.85"/><path d="M3.8 3.8c-2.04 2.03-.02 5.91 2.82 8.75 2.86 2.86 6.74 4.88 8.77 2.85"/><path d="M20.2 3.8c-2.03 2.04-5.91.02-8.75-2.82-2.86-2.86-4.88-6.74-2.85-8.77"/><path d="M3.8 20.2c2.03-2.04 5.91-.02 8.75 2.82 2.86 2.86 4.88 6.74 2.85 8.77"/></svg>' },
            { name: 'Next.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>' },
        ]
    }
];


export const TECH_STACK = [
    { name: 'JavaScript', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-braces"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>' },
    { name: 'TypeScript', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-braces"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>' },
    { name: 'React', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-atom"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-5.91-2.82-8.75-2.86-2.86-6.74-4.88-8.77-2.85"/><path d="M3.8 3.8c-2.04 2.03-.02 5.91 2.82 8.75 2.86 2.86 6.74 4.88 8.77 2.85"/><path d="M20.2 3.8c-2.03 2.04-5.91.02-8.75-2.82-2.86-2.86-4.88-6.74-2.85-8.77"/><path d="M3.8 20.2c2.03-2.04 5.91-.02 8.75 2.82 2.86 2.86 4.88 6.74 2.85 8.77"/></svg>' },
    { name: 'Next.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>' },
    { name: 'Node.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hexagon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>' },
    { name: 'Tailwind CSS', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>' },
    { name: 'PostgreSQL', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>' },
    { name: 'MongoDB', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-zap"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 12.3 2.9"/><path d="M21 5V8"/><path d="M3 12a9 3 0 0 0 5.2 2.8L12 12V5"/><path d="m13 14 4 3 2-3-4-3-2 3z"/><path d="M21 13v3a2 2 0 0 1-2 2h-1"/></svg>' },
    { name: 'GraphQL', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dashed"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"/><path d="M13.9 21.818a10 10 0 0 1-3.8 0"/><path d="M21.818 13.9a10 10 0 0 1 0-3.8"/><path d="M2.182 10.1a10 10 0 0 1 0 3.8"/><path d="M18.364 5.636a10 10 0 0 1 0 12.728"/><path d="M5.636 18.364a10 10 0 0 1 0-12.728"/><path d="M12 22a10 10 0 0 1-10-10"/><path d="M22 12a10 10 0 0 1-10 10"/></svg>' },
    { name: 'AWS', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
    { name: 'Firebase', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>' },
    { name: 'Figma', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>' },
];
