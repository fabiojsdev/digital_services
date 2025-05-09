import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = [
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

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "#" },
  { icon: <Twitter className="w-5 h-5" />, href: "#" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
  { icon: <Mail className="w-5 h-5" />, href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo e descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                <span className="font-bold text-gray-900">RV</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ReactVite
              </span>
            </div>
            <p className="text-sm mb-6">
              Transformando iniciantes em desenvolvedores profissionais com cursos de alta qualidade.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-500 hover:text-yellow-400 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-sm hover:text-yellow-400 transition-colors"
                      whileHover={{ x: 5 }}
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
          className="border-t border-gray-800 my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-sm"
        >
          <p>© {new Date().getFullYear()} ReactVite. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition-colors">Termos</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
