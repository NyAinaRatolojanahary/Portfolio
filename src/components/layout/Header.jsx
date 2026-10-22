import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './Header.css';

const navigationLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Compétences', href: '/competences' },
  { label: 'Projets', href: '/projets' },
  { label: 'Contact', href: '/contact' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <a href="/" className="site-brand" onClick={closeMenu}>
          <span className="site-brand__mark" aria-hidden="true">NA.</span>
          <span className="site-brand__text">
            <span className="site-brand__name">Ny Aina Ratolojanahary</span>
            <span className="site-brand__role">Développeur Fullstack</span>
          </span>
        </a>

        <button
          ref={menuButtonRef}
          className="site-menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          className={`site-navigation${isMenuOpen ? ' is-open' : ''}`}
          id="site-navigation"
          aria-label="Navigation principale"
        >
          <ul className="site-navigation__links">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="site-navigation__cta" href="/contact" onClick={closeMenu}>
            Me contacter
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;