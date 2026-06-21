import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

const services = [
  {
    title: 'Full-Stack Web Development',
    description: 'Design and build complete web applications from frontend to backend.',
    icon: '🛠️',
  },
  {
    title: 'Frontend Development',
    description: 'Create responsive, interactive interfaces using React.js.',
    icon: '✨',
  },
  {
    title: 'Backend API Development',
    description: 'Develop scalable REST APIs using Node.js and Express.js.',
    icon: '⚙️',
  },
  {
    title: 'Database Design & Integration',
    description: 'Create efficient database structures and integrate them seamlessly.',
    icon: '💾',
  },
  {
    title: 'Responsive Website Development',
    description: 'Build sites optimized for every screen size and device.',
    icon: '📱',
  },
  {
    title: 'Application Deployment',
    description: 'Deploy and maintain production-ready applications with confidence.',
    icon: '🚀',
  },
]

const skills = [
  { title: 'Java', level: 92 },
  { title: 'JavaScript', level: 90 },
  { title: 'Python', level: 76 },
  { title: 'React.js', level: 88 },
  { title: 'HTML5', level: 96 },
  { title: 'CSS3', level: 94 },
  { title: 'Node.js', level: 84 },
  { title: 'Express.js', level: 80 },
  { title: 'REST APIs', level: 88 },
  { title: 'MongoDB', level: 82 },
  { title: 'MySQL', level: 78 },
  { title: 'Git & GitHub', level: 90 },
  { title: 'MVC Architecture', level: 86 },
]

const projects = [
  {
    name: 'Online Ambulance Booking System',
    description:
      'Developed a web application enabling quick ambulance booking and real-time tracking for emergency response.',
    technologies: 'Node.js, JavaScript, HTML, CSS, SQL',
    features: ['Real-time tracking', 'Distance estimation', 'Emergency response workflows', 'User-friendly booking experience'],
  },
  {
    name: 'Object Detection Using Deep Learning',
    description:
      'Built a web application to detect and classify objects using deep learning models and optimized image preprocessing.',
    technologies: 'Python, YOLOv8, OpenCV, Django',
    features: ['Object detection', 'Image classification', 'Deep learning integration', 'Optimized model pipeline'],
  },
  {
    name: 'UM Interior (Live Project)',
    description:
      'Designed and deployed a full-stack interior design service platform with a responsive UI and MVC backend architecture.',
    technologies: 'React.js, Node.js, Express.js, MongoDB',
    features: ['Responsive UX', 'MVC architecture', 'Scalable backend', 'Production deployment'],
    live: 'https://uminteriors.vercel.app/',
  },
]

const resumeLink =
  'https://drive.google.com/file/d/1NFAZEVctwcdjY7v-kVogDpZWKnLI0EPT/view?usp=drive_link'

export default function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero resumeLink={resumeLink} />
        <About />
        <Skills skills={skills} />
        <Services services={services} />
        <Projects projects={projects} />
        <Achievements />
        <Resume resumeLink={resumeLink} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
