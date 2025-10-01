import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Utilisation d'un service de formulaire simple et fiable
      const formElement = e.target
      const formData_submit = new FormData()
      
      formData_submit.append('name', formData.name)
      formData_submit.append('email', formData.email)
      formData_submit.append('message', formData.message)
      formData_submit.append('_to', 'tristan.gastaldy@gmail.com')
      formData_submit.append('_subject', `Nouveau message de ${formData.name} - Portfolio`)
      formData_submit.append('_after', window.location.href)

      // Utilisation de Formsubmit.co - service gratuit et immédiat
      const response = await fetch('https://formsubmit.co/tristan.gastaldy@gmail.com', {
        method: 'POST',
        body: formData_submit
      })

      if (response.ok || response.redirected) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Erreur lors de l\'envoi')
      }
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Tristan Gastaldy</h2>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                À propos
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => scrollToSection('projects')}
              >
                Projets
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Salut, je suis <span className="highlight">Tristan Gastaldy</span>
            </h1>
            <p className="hero-subtitle">
              Là où l'inspiration rencontre la technique.
            </p>
            <p className="hero-description">
              Développeur passionné par la création d'expériences web modernes et innovantes. 
              Je transforme les idées en solutions digitales performantes.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                Voir mes projets
              </button>
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Me contacter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Mes Projets</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/mock-up.jpg" alt="Mockup de fire-hosting.net" className="project-img" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Fire Hosting</h3>
                <p className="project-description">
                  Avec un collaborateur, nous avons développé Fire Hosting, une plateforme d'hébergement web innovante.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Laravel</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">React</span>
                </div>
                <div className="project-links">
                  <a href="https://fire-hosting.net" className="project-link">Voir le projet</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">
                  <span>Image du projet</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Site professionnel</h3>
                <p className="project-description">
                  Description détaillée du deuxième projet avec les technologies utilisées et les défis relevés.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Vue.js</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">PostgreSQL</span>
                </div>
                <div className="project-links">
                  <a href="https://osteopathe-chambery.com/" className="project-link">Voir le projet</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">
                  <span>Image du projet</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Projet 3</h3>
                <p className="project-description">
                  Description détaillée du troisième projet avec les technologies utilisées et les défis relevés.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Prisma</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Voir le projet</a>
                  <a href="#" className="project-link">Code source</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Envoyez-moi un message pour collaborer !</h3>
              <p>
                Je suis toujours ouvert à de nouveaux projets et collaborations. 
                N'hésitez pas à me contacter si vous avez une idée ou un projet en tête.
              </p>
              <div className="contact-links">
                <a 
                  href="https://www.linkedin.com/in/tristan-gastaldy-8582a3335/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/YoupFun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="contact-form">
              <form 
                action="https://formsubmit.co/tristan.gastaldy@gmail.com" 
                method="POST"
                target="_blank"
              >
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="form-status success">
                    ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="form-status error">
                    ❌ Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement.
                  </div>
                )}
                
                <input type="hidden" name="_subject" value={`Nouveau message de ${formData.name} - Portfolio`} />
                <input type="hidden" name="_after" value={window.location.href} />
                
                <button 
                  type="submit" 
                  className="btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Tristan GASTALDY. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  )
}

export default App
