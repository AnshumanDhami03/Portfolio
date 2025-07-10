
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
            { name: 'Java', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#f44336" d="M43,30V18c0-2.2-1.8-4-4-4h-6c-2.2,0-4,1.8-4,4v12c0,2.2,1.8,4,4,4h6C41.2,34,43,32.2,43,30z M37,30h-2v-3h2V30z M37,23h-2v-3h2V23z"></path><path fill="#ff9800" d="M31,14v20c0,2.2,1.8,4,4,4h2c2.2,0,4-1.8,4-4V14H31z"></path><path fill="#f44336" d="M19,14c-3.1,0-5.6,4-5.6,8.9s2.5,8.9,5.6,8.9s5.6-4,5.6-8.9S22.1,14,19,14z"></path><path fill="#b71c1c" d="M19,31.8c-3.1,0-5.6-4-5.6-8.9S15.9,14,19,14c2.5,0,4.6,2.9,5.4,6.7c-1.5-0.9-3.4-1.5-5.4-1.5c-3.1,0-5.6,3-5.6,6.7c0,2.9,1.7,5.4,4,6.4C20.6,31.9,19.8,31.8,19,31.8z"></path><g><path fill="#ffc107" d="M5,14v20c0,2.2,1.8,4,4,4h2c2.2,0,4-1.8,4-4V14H5z"></path><path fill="#f44336" d="M11,30v-3.5c-1.6,2.3-4.5,3.5-6,3.5V38c2.2,0,4-1.8,4-4v-4H11z"></path></g></svg>' },
            { name: 'Python', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#3776ab" d="M17,40.1c-3,0-5.4-2.4-5.4-5.4V19.8h10.8v7.6c0,4.2-3.4,7.6-7.6,7.6C16.3,35.1,17,37.3,17,40.1z"></path><path fill="#3776ab" d="M31,7.9c3,0,5.4,2.4,5.4,5.4v14.9H25.6v-7.6c0-4.2,3.4-7.6,7.6-7.6C31.7,12.9,31,10.7,31,7.9z"></path><path fill="#ffd94a" d="M17,7.9c-3,0-5.4,2.4-5.4,5.4v6.5h10.8V12.2C22.4,10.4,19.9,7.9,17,7.9z"></path><path fill="#ffd94a" d="M31,40.1c3,0,5.4-2.4,5.4-5.4v-6.5H25.6v7.6C25.6,37.8,28.1,40.1,31,40.1z"></path><g><path fill="#3776ab" d="M19.8,22.7v-2.9h-2.9v2.9H19.8z M31,25.3v2.9h2.9v-2.9H31z"></path></g></svg>' },
            { name: 'JavaScript', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#f7c027" d="M24,44c11.046,0,20-8.954,20-20S35.046,4,24,4S4,12.954,4,24S12.954,44,24,44z"></path><path d="M29.539,18.243c-0.896-0.884-2.328-1.439-4.238-1.439c-2.164,0-3.693,0.671-4.738,1.999c-1.045,1.328-1.523,3.228-1.523,5.623c0,2.775,0.62,4.82,1.848,6.059c1.229,1.239,2.9,1.821,4.998,1.821c1.828,0,3.129-0.454,4.119-1.393c0.989-0.939,1.484-2.3,1.484-4.088h-3.01c0,1.219-0.34,2.099-1.02,2.641c-0.68,0.542-1.549,0.812-2.609,0.812c-1.289,0-2.291-0.439-3.008-1.318c-0.717-0.879-1.076-2.22-1.076-3.994c0-1.859,0.342-3.239,1.025-4.141c0.684-0.902,1.615-1.353,2.793-1.353c1.01,0,1.783,0.294,2.32,0.883c0.537,0.589,0.807,1.418,0.807,2.484h-3.01v0.002h-0.031v2.859h5.922C31.023,21.572,30.435,19.127,29.539,18.243z"></path></svg>' },
            { name: 'PHP', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#8892BF" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path><path fill="#FFFFFF" d="M24.1,13h-4.6c-1,0-1.8,0.8-1.8,1.8v1.8c0,1,0.8,1.8,1.8,1.8h2.8v5.5h-2.8c-1,0-1.8,0.8-1.8,1.8v1.8c0,1,0.8,1.8,1.8,1.8h4.6c1,0,1.8-0.8,1.8-1.8v-1.8c0-1-0.8-1.8-1.8-1.8h-2.8v-5.5h2.8c1,0,1.8-0.8,1.8-1.8v-1.8C25.9,13.8,25.1,13,24.1,13z"></path><path fill="#FFFFFF" d="M30,13h-4.6c-1,0-1.8,0.8-1.8,1.8v1.8c0,1,0.8,1.8,1.8,1.8h2.8v10.8c0,1,0.8,1.8,1.8,1.8h1.8c1,0,1.8-0.8,1.8-1.8V14.8C31.8,13.8,31,13,30,13z"></path><path fill="#FFFFFF" d="M13.5,13h-4.6c-1,0-1.8,0.8-1.8,1.8v1.8c0,1,0.8,1.8,1.8,1.8h2.8v10.8c0,1,0.8,1.8,1.8,1.8h1.8c1,0,1.8-0.8,1.8-1.8V14.8C15.3,13.8,14.5,13,13.5,13z"></path></svg>' },
            { name: 'SQL', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#3865a7" d="M42,21H6c-2.2,0-4,1.8-4,4v14c0,2.2,1.8,4,4,4h36c2.2,0,4-1.8,4-4V25C46,22.8,44.2,21,42,21z"></path><path fill="#f5f5f5" d="M2,25v14c0,2.2,1.8,4,4,4h36c2.2,0,4-1.8,4-4V25H2z"></path><path fill="#4caf50" d="M15,28h22c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H15c-0.6,0-1-0.4-1-1l0,0C14,28.4,14.4,28,15,28z"></path><path fill="#fbc02d" d="M15,33h19c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H15c-0.6,0-1-0.4-1-1l0,0C14,33.4,14.4,33,15,33z"></path><path fill="#e53935" d="M15,38h16c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H15c-0.6,0-1-0.4-1-1l0,0C14,38.4,14.4,38,15,38z"></path><path fill="#3865a7" d="M10,23c0-4.4,3.6-8,8-8s8,3.6,8,8c0,0.4,0,0.8-0.1,1.1c-1.3-1.6-3.2-2.6-5.4-2.6c-4.1,0-7.5,3.1-7.9,7.1C10.2,27.7,10,25.4,10,23z"></path><ellipse fill="#f5f5f5" cx="18" cy="23" rx="8" ry="8"></ellipse><path fill="#e53935" d="M22.5,23.4l-3.1,3.1c-0.4,0.4-1,0.4-1.4,0l-1.6-1.6c-0.4-0.4-0.4-1,0-1.4l3.1-3.1c0.4-0.4,1-0.4,1.4,0l1.6,1.6C22.9,22.4,22.9,23,22.5,23.4z"></path><path fill="#3865a7" d="M42,5H6C3.8,5,2,6.8,2,9v14c0,2.2,1.8,4,4,4h36c2.2,0,4-1.8,4-4V9C46,6.8,44.2,5,42,5z"></path><path fill="#f5f5f5" d="M2,9v14c0,2.2,1.8,4,4,4h36c2.2,0,4-1.8,4-4V9H2z"></path><path fill="#4caf50" d="M15,12h22c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H15c-0.6,0-1-0.4-1-1l0,0C14,12.4,14.4,12,15,12z"></path><path fill="#fbc02d" d="M15,17h19c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H15c-0.6,0-1-0.4-1-1l0,0C14,17.4,14.4,17,15,17z"></path><path fill="#e53935" d="M15,22h16c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H15c-0.6,0-1-0.4-1-1l0,0C14,22.4,14.4,22,15,22z"></path></svg>' },
        ]
    },
    {
        category: 'Frontend & Frameworks',
        skills: [
            { name: 'HTML5', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5z"></path><path fill="#FF6D00" d="M24,8v31.9l11.2-3.2L37.7,8H24z"></path><path fill="#FFFFFF" d="M33.1 13L24 13 24 17 28.9 17 28.5 21 24 21 24 25 28.1 25 27.5 32.2 24 33.2 24 37.1 32.2 34.5 33.1 23.5 33.1 13z"></path><path fill="#EEEEEE" d="M24,13v4h-8.9l-0.3-4H24z M19.5,21H24v4h-4.9l-0.3-4H19.5z M19.1,27h4.9v4.2l-4.1,1.1v-4.1L19.1,27z"></path></svg>' },
            { name: 'CSS3', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5z"></path><path fill="#039BE5" d="M24,8v31.9l11.2-3.2L37.7,8H24z"></path><path fill="#FFFFFF" d="M33.1 13L24 13 24 17 28.9 17 28.5 21 24 21 24 25 28.1 25 27.5 32.2 24 33.2 24 37.1 32.2 34.5 33.1 23.5 33.1 13z"></path><path fill="#EEEEEE" d="M24,13v4h-8.9l-0.3-4H24z M19.5,21H24v4h-4.9l-0.3-4H19.5z M19.1,27h4.9v4.2l-4.1,1.1v-4.1L19.1,27z"></path></svg>' },
            { name: 'Tailwind CSS', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#38BDF8"><path d="M12 4.5c-3.3 0-5.4 1.7-6.3 4.2c1.2-1.6,2.7-2.3,4.4-1.8c.9.2,1.6.8,2.3 1.5c1.1 1.1,2.5 2.6,5.6 2.6c3.3 0,5.4-1.7,6.3-4.2c-1.2 1.6-2.7 2.3-4.4 1.8c-.9-.2-1.6-.8-2.3-1.5c-1.1-1.1-2.5-2.6-5.6-2.6zm-5.7 7.5c-3.3 0-5.4 1.7-6.3 4.2c1.2-1.6,2.7-2.3,4.4-1.8c.9.2,1.6.8,2.3 1.5c1.1 1.1,2.5 2.6,5.6 2.6c3.3 0,5.4-1.7,6.3-4.2c-1.2 1.6-2.7 2.3-4.4 1.8c-.9-.2-1.6-.8-2.3-1.5c-1.1-1.1-2.5-2.6-5.6-2.6z"/></svg>' },
            { name: 'React.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="11" ry="4.2"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.2" fill="#61DAFB"/></svg>' },
            { name: 'Node.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#8CC84B" d="M11.33 22.396q-.542 0-.82-.278t-.278-.823V18.17q0-.53.284-.812t.814-.282h.432q.49 0 .777.282t.287.812v3.125q0 .545-.278.823t-.82.278zm-3.13-1.81q-.542 0-.82-.277t-.278-.823v-1.48q0-.53.284-.812t.814-.282h.432q.49 0 .777.282t.287.812v1.48q0 .546-.278.823t-.82.277zm6.26 0q-.542 0-.82-.277t-.278-.823v-1.48q0-.53.284-.812t.814-.282h.432q.49 0 .777.282t.287.812v1.48q0 .546-.278.823t-.82.277zM12 15.008q-4.83 0-6.104-1.397t-1.274-3.95V9.083q0-2.53 1.274-3.938t6.104-1.408q2.953 0 4.802 1.408t1.85 3.938v.578q0 2.553-1.85 3.95T12 15.008m5.526-5.83q0-2.035-1.12-3.143T12 4.92q-3.696 0-4.4 3.257l.865.267q.502-1.81 3.535-1.81q1.47 0 2.228.69t.758 1.95v.193q-.517-.63-1.33-.95t-1.747-.32q-2.12 0-3.352 1.132t-1.233 3.064v.193q0 1.833 1.22 2.92t3.366 1.088q.83 0 1.58-.29t1.296-.864v-.193q-.001-1.23-.743-1.92t-1.89-1.077q.815-.366 1.46-.886t.644-1.26z"/></svg>' },
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

