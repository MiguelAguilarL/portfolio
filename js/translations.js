const translations = {
  es: {
    meta: { title: "Miguel Aguilar | Frontend Developer", description: "Portafolio personal de Miguel Aguilar - Frontend Developer" },
    nav: { inicio: "Inicio", skills: "Skills", proyectos: "Proyectos", contacto: "Contacto", menu: "Menú" },
    hero: { greeting: "Hola, soy", role: "Frontend Developer", description: "Estudiante de Ingeniería en Sistemas apasionado por el desarrollo de software y web. Me encanta aprender cosas nuevas y colaborar en equipo. Actualmente incursionando en el mundo del desarrollo con IA.", cta: "Ver Proyectos", terminal: { title: "my_stack" }, status: "Disponible para trabajar" },
    about: { subtitle: "[ who am i ]", title: "Acerca de mí", stat1: "Proyectos", stat2: "Tecnologías", stat3: "Aprendizaje", p1: "Actualmente estoy estudiando la carrera de <strong>Ingeniería en Sistemas Computacionales</strong> en el Instituto Tecnológico de Veracruz. Mi pasión es el desarrollo de software y aplicaciones web.", p2: "Me considero una persona proactiva, responsable y con muchas ganas de aprender. Me encanta colaborar en equipo y enfrentar nuevos desafíos que me permitan crecer tanto profesional como personalmente.", p3: "Actualmente estoy incursionando en el mundo del desarrollo con <strong>Inteligencia Artificial</strong>, utilizando herramientas como Opencode y Antigravity para potenciar mis proyectos.", skill1: "Aprendizaje continuo", skill2: "Trabajo en equipo", skill3: "Innovación" },
    skills: { subtitle: "[ my skills ]", title: "Stack Tecnológico" },
    projects: { subtitle: "[ my projects ]", title: "Proyectos", sakura: { desc: "Aplicación web para practicar lectura de Hiragana y Katakana con una experiencia visual tipo Sakura/Zen. Incluye quiz interactivo y resumen de sesión." }, markdown: { desc: "Aplicación web interactiva para aprender la sintaxis básica de Markdown (CommonMark y GFM) con ejercicios prácticos y editor con feedback en tiempo real." } },
    contact: { subtitle: "[ get in touch ]", title: "Contacto", heading: "¡Hablemos!", text: "¿Tienes un proyecto en mente o simplemente quieres charlar? ¡Me encantaría escucharte!", email: "Enviar Email" },
    footer: { copyright: "© 2026 Miguel Aguilar." }
  },
  en: {
    meta: { title: "Miguel Aguilar | Frontend Developer", description: "Miguel Aguilar's personal portfolio - Frontend Developer" },
    nav: { inicio: "Home", skills: "Skills", proyectos: "Projects", contacto: "Contact", menu: "Menu" },
    hero: { greeting: "Hi, I'm", role: "Frontend Developer", description: "Systems Engineering student passionate about software and web development. I love learning new things and collaborating in teams. Currently diving into AI-powered development.", cta: "View Projects", terminal: { title: "my_stack" }, status: "Available for work" },
    about: { subtitle: "[ who am i ]", title: "About me", stat1: "Projects", stat2: "Technologies", stat3: "Learning", p1: "I'm currently studying <strong>Systems Engineering</strong> at the Instituto Tecnológico de Veracruz. My passion is software and web application development.", p2: "I consider myself a proactive, responsible person with a strong desire to learn. I love collaborating in teams and facing new challenges that help me grow both professionally and personally.", p3: "I'm currently venturing into <strong>AI-powered development</strong>, using tools like Opencode and Antigravity to enhance my projects.", skill1: "Continuous learning", skill2: "Teamwork", skill3: "Innovation" },
    skills: { subtitle: "[ my skills ]", title: "Tech Stack" },
    projects: { subtitle: "[ my projects ]", title: "Projects", sakura: { desc: "Web application for practicing Hiragana and Katakana reading with a Sakura/Zen visual experience. Includes interactive quiz and session summary." }, markdown: { desc: "Interactive web application for learning basic Markdown syntax (CommonMark and GFM) with practical exercises and real-time feedback editor." } },
    contact: { subtitle: "[ get in touch ]", title: "Contact", heading: "Let's talk!", text: "Have a project in mind or just want to chat? I'd love to hear from you!", email: "Send Email" },
    footer: { copyright: "© 2026 Miguel Aguilar." }
  }
};

function getNestedValue(obj, key) {
  return key.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(t, key);
    if (value !== undefined) {
      if (el.tagName === 'TITLE') {
        document.title = value;
      } else if (el.children.length > 0 || value.includes('<')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    }
  });

  document.querySelectorAll('[data-i18n-content]').forEach(el => {
    const key = el.getAttribute('data-i18n-content');
    const value = getNestedValue(t, key);
    if (value !== undefined) el.setAttribute('content', value);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    const value = getNestedValue(t, key);
    if (value !== undefined) el.setAttribute('aria-label', value);
  });
}

function setLanguage(lang) {
  applyTranslations(lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

setLanguage('es');
