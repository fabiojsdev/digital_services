import { Mail, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LeadForm() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl"
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-gray-900 to-gray-800">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Garanta sua vaga!
              </h2>
              <p className="text-gray-400 mb-6">
                Preencha o formulário para receber acesso antecipado e desconto especial.
              </p>
              
              <ul className="space-y-3 mb-8">
                <motion.li 
                  className="flex items-center gap-3 text-gray-300"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                  </div>
                  <span>Material exclusivo de preparação</span>
                </motion.li>
                
                <motion.li 
                  className="flex items-center gap-3 text-gray-300"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  </div>
                  <span>Desconto de lançamento</span>
                </motion.li>
                
                <motion.li 
                  className="flex items-center gap-3 text-gray-300"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  </div>
                  <span>Acesso à comunidade VIP</span>
                </motion.li>
              </ul>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Seu Nome
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      id="name"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                      placeholder="Nome completo"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Seu Melhor E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  Quero me inscrever <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <p className="text-xs text-gray-500 text-center">
                  Não compartilhamos seus dados. Leia nossa{' '}
                  <a href="#" className="text-yellow-400 hover:underline">Política de Privacidade</a>.
                </p>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
