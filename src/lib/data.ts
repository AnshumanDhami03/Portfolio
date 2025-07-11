

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Tech Stack', href: '#tech-stack'},
  { name: 'Projects', href: '#projects' },
  { name: 'Data Analysis', href: '#data-analysis' },
];

export const ARTIST_NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = {
    github: 'https://github.com/AnshumanDhami03',
    linkedin: 'https://www.linkedin.com/in/anshuman-dhami-546078229/',
    gmail: 'dhamianshuman@gmail.com',
};

export const ARTIST_SOCIAL_LINKS = {
    instagram: 'https://www.instagram.com/anshuman_zodiax/',
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
    certificateUrl: 'https://drive.google.com/file/d/1EBJFhMZawidJ7k1CgNiT5P0oN5Zsy1xS/view?usp=sharing',
    certificateImageUrl: 'https://i.postimg.cc/25bjs7Vr/Screenshot-2025-07-10-174026.png',
  },
  {
    year: 'Feb 2022 — Apr 2022',
    company: 'College Rollup',
    companyUrl: '#',
    role: 'Graphic Designer Intern',
    description: 'Designed company’s Instagram posts, enhancing social media presence. Assisted in creating market-appealing graphics.',
    skills: ['Graphic Design', 'Social Media Marketing', 'Canva', 'Figma'],
    certificateUrl: 'https://drive.google.com/file/d/1f2OVXGpti9Bzt5ZNL1ZocTi7qfkNdVkM/view?usp=sharing',
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
        imageUrl: 'https://i.postimg.cc/CKPvMb9B/istockphoto-130615831-612x612.jpg',
        imageHint: 'counselling portal',
        tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        liveUrl: null,
        githubUrl: 'https://github.com/AnshumanDhami03/Counselling-Portal',
    },
];

export const DATA_ANALYSIS_PROJECTS = [
    {
        title: 'Movie Rental Analysis (Power BI)',
        description: 'This Power BI project explores key business insights for a movie rental service across six areas: location, revenue, customer behavior, rental patterns, film performance, and actor preferences. Using visualizations and filters, the dashboard highlights how factors like store geography, film categories, and customer segments impact rental trends and revenue generation. The report includes performance metrics such as rental rates, customer activity, popular genres, and actor influence—helping to identify high-performing stores, profitable films, and targeted marketing opportunities.',
        imageUrl: 'https://i.postimg.cc/FzkGyC0p/Screenshot-2025-07-11-090708.png',
        imageHint: 'movie rental dashboard',
        tech: ['Power BI', 'Excel', 'SQL'],
        liveUrl: null,
        githubUrl: 'https://github.com/AnshumanDhami03/Movie-Rental',
    },
    {
        title: 'Loan Data Dashboard Suite (Power BI)',
        description: 'Designed to support informed decision-making, the visuals help identify patterns, track portfolio risks, and uncover areas for operational improvement. By bringing together multiple perspectives in one platform, the project aims to simplify complex loan data and turn it into practical, actionable insights. Built using Power BI, Excel, and SQL, the solution enables data filtering, trend identification, and risk tracking.',
        imageUrl: 'https://i.postimg.cc/vZwXPXfV/Screenshot-2025-07-11-092904.png',
        imageHint: 'loan dashboard',
        tech: ['Power BI', 'Excel', 'SQL'],
        liveUrl: null,
        githubUrl: 'https://github.com/AnshumanDhami03/Bank-Loan-Insights',
    },
];

export const CATEGORIZED_TECH_STACK = [
    {
        category: 'Programming Languages',
        skills: [
            { name: 'Java', icon: 'https://i.postimg.cc/wTdSMjXn/icons8-java-48.png' },
            { name: 'Python', icon: 'https://i.postimg.cc/Cx0BckjJ/icons8-python-48.png' },
            { name: 'JavaScript', icon: 'https://i.postimg.cc/yNMzTXR8/icons8-javascript-48.png' },
            { name: 'PHP', icon: 'https://i.postimg.cc/XYXSSDcv/icons8-php-logo-30.png' },
            { name: 'SQL', icon: 'https://i.postimg.cc/XvV5YdqX/sql-server.png' },
        ]
    },
    {
        category: 'Frontend & Frameworks',
        skills: [
            { name: 'HTML5', icon: 'https://i.postimg.cc/ZY9wmtX2/html-5.png' },
            { name: 'CSS3', icon: 'https://i.postimg.cc/L6tB4HDC/css-3.png' },
            { name: 'Tailwind CSS', icon: 'https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000' },
            { name: 'React.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="11" ry="4.2"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.2" fill="#61DAFB"/></svg>' },
            { name: 'TypeScript', icon: 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000' },
        ]
    },
    {
        category: 'Data Analyst Skillset',
        skills: [
            { name: 'Microsoft Excel', icon: 'https://i.postimg.cc/5N9zk2p7/icons8-excel-48.png' },
            { name: 'Python', icon: 'https://i.postimg.cc/Cx0BckjJ/icons8-python-48.png' },
            { name: 'SQL', icon: 'https://i.postimg.cc/XvV5YdqX/sql-server.png' },
            { name: 'Power BI', icon: 'https://i.postimg.cc/SK9Yz2Ns/icons8-power-bi-2021-48.png' },
        ]
    }
];


export const ARTIST_GALLERY = [
    {
        title: "Radha Krishna",
        description: 'A divine artwork capturing the eternal love of Radha and Krishna.',
        imageUrl: 'https://i.postimg.cc/kGsFpWWD/Radha-Krishna.png',
        imageHint: 'radha krishna divine',
    },
    {
        title: 'Lotus Bloom',
        description: 'A vibrant digital painting of a lotus flower in full bloom, symbolizing purity and enlightenment.',
        imageUrl: 'https://i.postimg.cc/SRK2zHNw/Lotus.jpg',
        imageHint: 'lotus flower',
    },
    {
        title: 'Blossom Scenery',
        description: 'A tranquil scenery of cherry blossoms, capturing the beauty of spring.',
        imageUrl: 'https://i.postimg.cc/1zpJWVcy/Blossom-Scenery.png',
        imageHint: 'cherry blossom scenery',
    },
    {
        title: 'Gautam Buddha',
        description: 'A serene portrait of Gautam Buddha in a meditative state, radiating peace and tranquility.',
        imageUrl: 'https://i.postimg.cc/cCZHQ21s/Gautam-Buddha.png',
        imageHint: 'gautam buddha portrait',
    },
    {
        title: 'Ship at Sea',
        description: 'A majestic ship sailing underwater, capturing the spirit of adventure.',
        imageUrl: 'https://i.postimg.cc/mgr372Cj/Ship.jpg',
        imageHint: 'ship sea',
    },
    {
        title: 'Solitude and Peace',
        description: 'A peaceful artwork representing solitude.',
        imageUrl: 'https://i.postimg.cc/XvfvJ9qz/Solitude-and-peace.jpg',
        imageHint: 'solitude peace',
    },
];

export const TECH_STACK = [
    { name: 'JavaScript', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-braces"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>' },
    { name: 'TypeScript', icon: 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000' },
    { name: 'React', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-atom"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-5.91-2.82-8.75-2.86-2.86-6.74-4.88-8.77-2.85"/><path d="M3.8 3.8c-2.04 2.03-.02 5.91 2.82 8.75 2.86 2.86 6.74 4.88 8.77 2.85"/><path d="M20.2 3.8c-2.03 2.04-5.91.02-8.75-2.82-2.86-2.86-4.88-6.74-2.85-8.77"/><path d="M3.8 20.2c2.03-2.04 5.91-.02 8.75 2.82 2.86 2.86 4.88 6.74 2.85 8.77"/></svg>' },
    { name: 'Node.js', icon: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000' },
    { name: 'Tailwind CSS', icon: 'https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000' },
    { name: 'PostgreSQL', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>' },
    { name: 'MongoDB', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-zap"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 12.3 2.9"/><path d="M21 5V8"/><path d="M3 12a9 3 0 0 0 5.2 2.8L12 12V5"/><path d="m13 14 4 3 2-3-4-3-2 3z"/><path d="M21 13v3a2 2 0 0 1-2 2h-1"/></svg>' },
    { name: 'GraphQL', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dashed"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"/><path d="M13.9 21.818a10 10 0 0 1-3.8 0"/><path d="M21.818 13.9a10 10 0 0 1 0-3.8"/><path d="M2.182 10.1a10 10 0 0 1 0 3.8"/><path d="M18.364 5.636a10 10 0 0 1 0 12.728"/><path d="M5.636 18.364a10 10 0 0 1 0-12.728"/><path d="M12 22a10 10 0 0 1-10-10"/><path d="M22 12a10 10 0 0 1-10 10"/></svg>' },
    { name: 'AWS', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>' },
    { name: 'Firebase', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>' },
    { name: 'Figma', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>' },
];


    

    













