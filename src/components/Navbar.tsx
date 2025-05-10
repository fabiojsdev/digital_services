import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [
    { name: 'Início', href: '#hero' },          // Link para a seção Hero
    { name: 'Recursos', href: '#features' },    // Link para a seção Features
    { name: 'Depoimentos', href: '#testimonials' }, // Link para a seção Testimonials
    { name: 'Inscreva-se', href: '#leadform' }, // Link para a seção LeadForm
    { name: 'FAQ', href: '#faq' },              // Link para uma seção de FAQ (caso queira adicionar)
  ]; return (
    <>
      {/* Navbar Desktop */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
isScrolled
? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-800'
: 'bg-transparent'
}`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                <span className="font-bold text-gray-900">DC</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Digital Course
              </span>
            </motion.a>

            {/* Itens de navegação - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* CTA e Menu Mobile */}
            <div className="flex items-center gap-4">
              <motion.a
                href="#pricing"
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-lg transition-all hover:shadow-lg hover:shadow-yellow-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Inscreva-se <ArrowRight size={16} />
              </motion.a>

              <button
                className="md:hidden text-gray-300 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-40 pt-20 bg-gray-900/95 backdrop-blur-lg md:hidden"
          >
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-8">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-2xl font-medium text-gray-300 hover:text-white py-2 border-b border-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}

                <motion.a
                  href="#pricing"
                  className="mt-8 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-medium py-3 px-6 rounded-lg w-full"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inscreva-se <ArrowRight size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
