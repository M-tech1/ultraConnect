const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export const PhoneIcon = () => (
  <svg {...base}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
)

export const MailIcon = () => (
  <svg {...base}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
)

export const PinIcon = () => (
  <svg {...base}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
)

export const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2-.8 1-1 1.2-.4.2-.7 0a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-1-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c.7.3 1.3.5 1.7.6a4.2 4.2 0 0 0 1.9.1 3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.3zM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.9L0 24l6.3-1.6A11.8 11.8 0 0 0 12 23.8 11.8 11.8 0 0 0 20.4 3.6z" />
  </svg>
)

export const ArrowIcon = () => (
  <svg {...base}><path d="M7 17 17 7M8 7h9v9" /></svg>
)

export const MenuIcon = () => (
  <svg {...base} width="24" height="24"><path d="M4 7h16M4 12h16M4 17h10" /></svg>
)

export const CloseIcon = () => (
  <svg {...base} width="24" height="24"><path d="M18 6 6 18M6 6l12 12" /></svg>
)

export const ChevronIcon = ({ dir = 'right' }) => (
  <svg {...base} style={{ transform: dir === 'left' ? 'rotate(180deg)' : undefined }}><path d="m9 18 6-6-6-6" /></svg>
)

// The logo's wifi arcs, used as an animated motif
export const SignalRings = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <path className="ring r1" d="M20 70a50 50 0 0 1 50-50" />
    <path className="ring r2" d="M38 70a32 32 0 0 1 32-32" />
    <path className="ring r3" d="M56 70a14 14 0 0 1 14-14" />
  </svg>
)
