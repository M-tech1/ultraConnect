// All site copy lives here, taken from the UltraConnect company profile PDF.
const images = import.meta.glob('./assets/img/*', { eager: true, import: 'default' })
export const img = (name) => images[`./assets/img/${name}`]

export const company = {
  name: 'UltraConnect Solutions',
  tagline: 'Creating Solutions That Scale',
  rc: 'RC 9237987',
  phone: '+234 806 575 2329',
  phoneHref: 'tel:+2348065752329',
  whatsapp: 'https://wa.me/2348065752329',
  email: 'Ultraconnect09@gmail.com',
  location: 'Abuja, Nigeria',
  intro:
    "Ready to transform your space with smart, scalable technology? We'd love to hear about your project and show you what UltraConnect Solutions can do for you.",
}

export const chapters = [
  { id: 'about', num: '01', label: 'About' },
  { id: 'ceo', num: '02', label: 'The CEO' },
  { id: 'story', num: '03', label: 'Our Story' },
  { id: 'mission', num: '04', label: 'Mission & Vision' },
  { id: 'services', num: '05', label: 'Services' },
  { id: 'highlights', num: '06', label: 'Highlights' },
  { id: 'team', num: '07', label: 'The Team' },
  { id: 'portfolio', num: '08', label: 'Portfolio' },
  { id: 'contact', num: '09', label: 'Contact' },
]

export const about = {
  lead:
    'UltraConnect Solutions is a premier technology integration company specializing in the design, procurement, and installation of cutting-edge smart infrastructure systems.',
  body: [
    'We are committed to delivering innovative, reliable, and efficient technology solutions tailored to meet the evolving needs of individuals and businesses. With a strong foundation built on integrity, trust, and excellence, we simplify complex digital challenges and provide seamless access to cutting-edge services.',
    'Our team combines technical expertise with a deep understanding of client needs, ensuring every solution is practical, scalable, and results-driven — from troubleshooting and system support to advanced digital solutions.',
  ],
  quote:
    'From securing homes and businesses with state-of-the-art CCTV systems to transforming living spaces into intelligent, automated environments — our certified technicians work hand-in-hand with clients from first consultation to post-installation support.',
  stats: [
    { value: '10+', label: 'Years of ICT experience' },
    { value: '8', label: 'Core services' },
    { value: '100%', label: 'Client-centred' },
  ],
}

export const ceo = {
  name: 'Omale Timothy O.',
  title: 'Founder & CEO · Engineer, Specialist',
  photo: img('ceo.webp'),
  bio:
    'Highly accomplished ICT Engineer and seasoned executive with 10 years of experience driving business growth, innovation, and digital transformation. A proven track record of delivering high-impact projects and leading high-performing teams — with a passion for harnessing technology to drive business success.',
}

export const story = {
  title: 'A story of trust, honesty and innovation.',
  body: [
    "In a world where trust has become a luxury, UltraConnect Solutions was born out of a passion to bridge the gap between clients' expectations and the disappointing reality of service delivery.",
    'Our founder, Omale Timothy O., had a front-row seat to the unprofessionalism that had become all too common in the service industry — companies making grand promises, only to disappoint and betray their clients’ trust.',
    'He set out to build a company that would break that cycle of distrust and set a new standard for client-centricity.',
  ],
}

export const mission = [
  'At UltraConnect Solutions, we care, create, and deliver convenient solutions that exceed our clients’ expectations — driven by a passion for professionalism, empathy, and innovation.',
  'To empower homes and businesses with intelligent, integrated technology solutions that enhance security, connectivity, and convenience, delivered with unmatched professionalism and care.',
]

export const vision =
  'To revolutionize the way solutions are delivered — providing trusted, innovative, and reliable services that adapt to our clients’ evolving needs. We envision a future where clients confidently rely on us to scale with their growth, while we drive innovation and excellence in everything we do.'

export const services = [
  { title: ['CCTV', 'Installations'], text: 'Secure your home and business with high-quality surveillance systems and professional setup.', image: img('svc-cameras.webp') },
  { title: ['Home', 'Automation'], text: 'Control your lights, security, and appliances effortlessly with smart automation solutions.', image: img('hl-home-automation.webp') },
  { title: ['Intercom', 'Networking'], text: 'Reliable intercom systems for clear communication within homes, offices, and estates.', image: img('svc-smart-door.webp') },
  { title: ['Home Sound', 'Systems'], text: 'Enjoy premium audio experiences with expertly installed home sound and entertainment systems.', image: img('smart-home.webp') },
  { title: ['Internet', 'Networking'], text: 'Fast, stable, and well-structured internet networking for seamless connectivity.', image: img('hl-tower.webp') },
  { title: ['Satellite', 'Installation'], text: 'Professional satellite dish installation for clear signals and uninterrupted viewing.', image: img('pf-dish-install.webp') },
  { title: ['Expert', 'Consultations'], text: 'Get expert guidance and tailored recommendations for your tech and security needs.', image: img('team-at-work.webp') },
  { title: ['Procurement &', 'Installation'], text: 'We source quality equipment and deliver expert installation for complete satisfaction.', image: img('brand-kit.webp') },
]

export const highlights = [
  { label: 'Surveillance Systems', image: img('hl-surveillance.webp'), area: 'a' },
  { label: 'Home Automation', image: img('hl-home-automation.webp'), area: 'b' },
  { label: 'Networking', image: img('hl-starlink.webp'), area: 'c' },
  { label: 'Server Admin', image: img('hl-server-admin.webp'), area: 'd' },
  { label: 'Solar Lights', image: img('hl-solar-light.webp'), area: 'e' },
  { label: 'Field Engineering', image: img('hl-tower.webp'), area: 'f' },
]

export const team = [
  { name: 'Engr. Michael Segun', role: 'Network Engineer', photo: img('team-michael-segun.webp') },
  { name: 'Engr. John A. Stephen', role: 'Solar Systems Specialist', photo: img('team-john-stephen.webp') },
  { name: 'Engr. Martins Ake', role: 'Software, IoT & Automation Expert', photo: img('team-martins-ake.webp') },
  { name: 'Engr. Obieri Emeka Favour', role: 'Automation Engineer', photo: img('team-obieri-emeka.webp') },
  { name: 'Engr. Ani Vincent Okoro', role: 'Electrical Engineer', photo: img('team-ani-vincent.webp') },
]

export const portfolio = [
  { src: img('pf-site-crew.webp'), caption: 'Site cabling works', shape: 'tall' },
  { src: img('pf-dish-install.webp'), caption: 'Satellite dish alignment', shape: 'circle' },
  { src: img('pf-site-cabins.webp'), caption: 'Site survey & cabin connectivity', shape: 'wide' },
  { src: img('pf-engineer.webp'), caption: 'Our engineer on site', shape: 'circle' },
  { src: img('pf-server-rack.webp'), caption: 'Server rack installation', shape: 'tall' },
  { src: img('pf-panel-antenna.webp'), caption: 'Point-to-point antenna mounting', shape: 'circle' },
  { src: img('pf-junction-box.webp'), caption: 'Outdoor junction box & ducting', shape: 'square' },
  { src: img('pf-dish-mount.webp'), caption: 'Dish mounting & cabling', shape: 'circle' },
]
