
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
        title: 'AlgoVision',
        description: 'Built an interactive algorithm visualization platform for Sorting, Searching and MST algorithms. Used React with TypeScript to create modular components and styled with Tailwind CSS for a clean, responsive UI.',
        imageUrl: 'https://i.postimg.cc/xTp8fhq0/Screenshot-2025-07-10-185132.png',
        imageHint: 'algorithm visualization',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        liveUrl: 'https://algo-vision-gray.vercel.app/',
        githubUrl: 'https://github.com/AnshumanDhami03/AlgoVision',
    },
    {
        title: 'Smart Election',
        description: 'Online Voting through Facial Recognition. Developed a secure voting system using face recognition and Voter ID. Backend via Flask; used OpenCV for image encoding and identity validation. Integrated CSV for storing voter credentials and tracking vote status.',
        imageUrl: 'https://i.postimg.cc/4xPx23hN/evoting-concept-illustration-young-people-260nw-439415137.jpg',
        imageHint: 'voting illustration',
        tech: ['Python', 'Flask', 'OpenCV'],
        liveUrl: null,
        githubUrl: 'https://github.com/AnshumanDhami03/smartElection',
    },
    {
        title: 'Counselling Portal',
        description: 'A web app for college counselling that determines course eligibility based on academic marks. Used PHP for server logic, MySQL for data, and a responsive UI built with HTML, CSS, & JavaScript.',
        imageUrl: 'https://i.postimg.cc/CKPvMb9B/istockphoto-1306158131-612x612.jpg',
        imageHint: 'counselling portal',
        tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        liveUrl: null,
        githubUrl: 'https://github.com/AnshumanDhami03/Counselling-Portal',
    },
];

export const CATEGORIZED_TECH_STACK = [
    {
        category: 'Programming Languages',
        skills: [
            { name: 'Java', icon: null },
            { name: 'Python', icon: null },
            { name: 'JavaScript', icon: null },
            { name: 'PHP', icon: null },
            { name: 'SQL', icon: null },
        ]
    },
    {
        category: 'Frontend & Frameworks',
        skills: [
            { name: 'HTML5', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5z"></path><path fill="#FF6D00" d="M24,8v31.9l11.2-3.2L37.7,8H24z"></path><path fill="#FFFFFF" d="M33.1 13L24 13 24 17 28.9 17 28.5 21 24 21 24 25 28.1 25 27.5 32.2 24 33.2 24 37.1 32.2 34.5 33.1 23.5 33.1 13z"></path><path fill="#EEEEEE" d="M24,13v4h-8.9l-0.3-4H24z M19.5,21H24v4h-4.9l-0.3-4H19.5z M19.1,27h4.9v4.2l-4.1,1.1v-4.1L19.1,27z"></path></svg>' },
            { name: 'CSS3', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5z"></path><path fill="#039BE5" d="M24,8v31.9l11.2-3.2L37.7,8H24z"></path><path fill="#FFFFFF" d="M33.1 13L24 13 24 17 28.9 17 28.5 21 24 21 24 25 28.1 25 27.5 32.2 24 33.2 24 37.1 32.2 34.5 33.1 23.5 33.1 13z"></path><path fill="#EEEEEE" d="M24,13v4h-8.9l-0.3-4H24z M19.5,21H24v4h-4.9l-0.3-4H19.5z M19.1,27h4.9v4.2l-4.1,1.1v-4.1L19.1,27z"></path></svg>' },
            { name: 'Tailwind CSS', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#38BDF8"><path d="M12 4.5c-3.3 0-5.4 1.7-6.3 4.2c1.2-1.6,2.7-2.3,4.4-1.8c.9.2,1.6.8,2.3 1.5c1.1 1.1,2.5 2.6,5.6 2.6c3.3 0,5.4-1.7,6.3-4.2c-1.2 1.6-2.7 2.3-4.4 1.8c-.9-.2-1.6-.8-2.3-1.5c-1.1-1.1-2.5-2.6-5.6-2.6zm-5.7 7.5c-3.3 0-5.4 1.7-6.3 4.2c1.2-1.6,2.7-2.3,4.4-1.8c.9.2,1.6.8,2.3 1.5c1.1 1.1,2.5 2.6,5.6 2.6c3.3 0,5.4-1.7,6.3-4.2c-1.2 1.6-2.7 2.3-4.4 1.8c-.9-.2-1.6-.8-2.3-1.5c-1.1-1.1-2.5-2.6-5.6-2.6z"/></svg>' },
            { name: 'React.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="11" ry="4.2"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.2" fill="#61DAFB"/></svg>' },
            { name: 'TypeScript', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="#3178c6" d="M24,4A20,20,0,1,0,44,24,20,20,0,0,0,24,4Zm11,20a1.84,1.84,0,0,1-1.83,1.84H14.83A1.84,1.84,0,0,1,13,24V14.83A1.84,1.84,0,0,1,14.83,13H24a1.84,1.84,0,0,1,1.83,1.83Z"/><path fill="#fff" d="M22.5,28h-6V26h6Zm0-4h-6V22h6Zm0-4h-9V18h9Zm0-4h-9V14h9Zm9,12H27V26h4.5ZM31.5,20H27v2h4.5Zm0-4H27v2h4.5Zm0-4H27v2h4.5Z"/></svg>' },
        ]
    }
];


export const TECH_STACK = [
    { name: 'JavaScript', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-braces"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>' },
    { name: 'TypeScript', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="#3178c6" d="M24,4A20,20,0,1,0,44,24,20,20,0,0,0,24,4Zm11,20a1.84,1.84,0,0,1-1.83,1.84H14.83A1.84,1.84,0,0,1,13,24V14.83A1.84,1.84,0,0,1,14.83,13H24a1.84,1.84,0,0,1,1.83,1.83Z"/><path fill="#fff" d="M22.5,28h-6V26h6Zm0-4h-6V22h6Zm0-4h-9V18h9Zm0-4h-9V14h9Zm9,12H27V26h4.5ZM31.5,20H27v2h4.5Zm0-4H27v2h4.5Zm0-4H27v2h4.5Z"/></svg>' },
    { name: 'React', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-atom"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-5.91-2.82-8.75-2.86-2.86-6.74-4.88-8.77-2.85"/><path d="M3.8 3.8c-2.04 2.03-.02 5.91 2.82 8.75 2.86 2.86 6.74 4.88 8.77 2.85"/><path d="M20.2 3.8c-2.03 2.04-5.91.02-8.75-2.82-2.86-2.86-4.88-6.74-2.85-8.77"/><path d="M3.8 20.2c2.03-2.04 5.91-.02 8.75 2.82 2.86 2.86 4.88 6.74 2.85 8.77"/></svg>' },
    { name: 'Node.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#68a063" d="M41,2H7C4.2,2,2,4.2,2,7v34c0,2.8,2.2,5,5,5h34c2.8,0,5-2.2,5-5V7C46,4.2,43.8,2,41,2z"></path><path fill="#fff" d="M26.4,27.5c-0.4,1.4-1.3,2.5-2.5,3.4c-1,0.7-2.3,1-3.8,1c-1.4,0-2.8-0.3-4.1-1c-1.2-0.6-2.1-1.6-2.6-2.8c-0.6-1.2-0.8-2.6-0.8-4c0-2.1,0.5-3.9,1.5-5.5c1-1.6,2.4-2.7,4.3-3.4l8.2-3.1c0.2-0.1,0.3-0.1,0.5,0c0.1,0.1,0.2,0.2,0.2,0.4V28c0,0.2-0.1,0.3-0.2,0.4C26.5,28.5,26.4,28.2,26.4,27.5z M22,23.5c0,0.9-0.2,1.7-0.7,2.4c-0.5,0.7-1.1,1.1-1.9,1.1c-0.8,0-1.4-0.4-1.9-1.1c-0.5-0.7-0.7-1.5-0.7-2.4c0-0.9,0.2-1.7,0.7-2.4c0.5-0.7,1.1-1.1,1.9-1.1c0.8,0,1.4,0.4,1.9,1.1C21.8,21.8,22,22.6,22,23.5z"></path><path fill="#fff" d="M34.3,21.7c-0.4-1.1-1-2-1.8-2.6c-0.8-0.6-1.8-0.9-2.9-0.9c-1,0-1.9,0.2-2.7,0.6s-1.4,1-2,1.8c-0.5,0.8-0.8,1.7-0.8,2.8c0,1.3,0.3,2.4,0.9,3.3c0.6,0.9,1.4,1.5,2.4,1.9c0.9,0.3,1.7,0.4,2.4,0.4c0.8,0,1.5-0.1,2.1-0.2c0.6-0.1,1.2-0.4,1.6-0.7c0.1-0.1,0.1-0.2,0.2-0.2c0,0-0.1,0.1-0.1,0.1c-0.5,0.4-1,0.7-1.6,0.9c-0.6,0.2-1.3,0.3-2.2,0.3c-1.1,0-2.1-0.3-2.9-0.8c-0.9-0.5-1.5-1.3-1.9-2.3c-0.4-1-0.6-2.1-0.6-3.3c0-1.5,0.4-2.9,1.1-4.1c0.8-1.2,1.9-2.1,3.2-2.6c1.4-0.5,2.8-0.8,4.3-0.8c1,0,2,0.1,2.9,0.4c0.9,0.3,1.7,0.7,2.4,1.2c0.1,0.1,0.2,0.2,0.2,0.4v1.8l-7.7,2.8C34,22.1,34.2,21.9,34.3,21.7z"></path></svg>' },
    { name: 'Tailwind CSS', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#38bdf8" d="M24,9c-6.627,0-10.795,3.423-12.615,8.42C13.564,14.714,16.436,13,19.8,13c2.1,0.1,3.8,1.1,5.2,2.5c2.2,2.2,4.8,5.5,11,5.5c6.627,0,10.795-3.423,12.615-8.42C46.436,15.286,43.564,17,40.2,17c-2.1-0.1-3.8-1.1-5.2-2.5C32.8,12.3,30.2,9,24,9z M11.385,24.42C9.564,21.714,6.692,20,3.327,20c-2.1,0.1-3.8,1.1-5.2,2.5C-4.072,24.7-1.472,28,4.727,28c6.627,0,10.795-3.423,12.615-8.42C15.163,22.286,12.29,24,8.926,24c-2.1-0.1-3.8-1.1-5.2-2.5C1.528,19.3,4.128,16,10.327,16C16.954,16,21.123,19.423,22.942,24.42z"></path></svg>' },
    { name: 'PostgreSQL', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>' },
    { name: 'MongoDB', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-zap"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 12.3 2.9"/><path d="M21 5V8"/><path d="M3 12a9 3 0 0 0 5.2 2.8L12 12V5"/><path d="m13 14 4 3 2-3-4-3-2 3z"/><path d="M21 13v3a2 2 0 0 1-2 2h-1"/></svg>' },
    { name: 'GraphQL', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dashed"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"/><path d="M13.9 21.818a10 10 0 0 1-3.8 0"/><path d="M21.818 13.9a10 10 0 0 1 0-3.8"/><path d="M2.182 10.1a10 10 0 0 1 0 3.8"/><path d="M18.364 5.636a10 10 0 0 1 0 12.728"/><path d="M5.636 18.364a10 10 0 0 1 0-12.728"/><path d="M12 22a10 10 0 0 1-10-10"/><path d="M22 12a10 10 0 0 1-10 10"/></svg>' },
    { name: 'AWS', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
    { name: 'Firebase', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>' },
    { name: 'Figma', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>' },
];
