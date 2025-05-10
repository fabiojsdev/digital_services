import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

// Tipos TypeScript
type NavLink = {
  name: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: NavLink[];
};

type SocialLink = {
  icon: React.ReactNode;
  href: string;
  label: string;
};

// Dados do footer
const footerColumns: FooterColumn[] = [
  {
    title: "Produto",
    links: [
      { name: "Recursos", href: "#features" },
      { name: "Preços", href: "#pricing" },
      { name: "FAQ", href: "#faq" }
    ]
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Contato", href: "#contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Termos", href: "#terms" },
      { name: "Privacidade", href: "#privacy" },
      { name: "Cookies", href: "#cookies" }
    ]
  }
];

const socialLinks: SocialLink[] = [
  { icon: <Github size={20} />, href: "#", label: "GitHub" },
  { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  { icon: <Mail size={20} />, href: "#", label: "Email" }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600">
                <span className="font-bold text-gray-900">DC</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Digital Course
              </span>
            </div>
            
            <p className="text-sm text-gray-400">
              Transformando iniciantes em desenvolvedores profissionais com cursos de alta qualidade.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={`social-${index}`}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          {footerColumns.map((column, columnIndex) => (
            <motion.div
              key={`column-${columnIndex}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link, linkIndex) => (
                  <li key={`link-${columnIndex}-${linkIndex}`}>
                    <motion.a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="my-8 border-t border-gray-800"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row"
        >
          <p>© {currentYear} Digital Course. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow-400 transition-colors">Termos</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
