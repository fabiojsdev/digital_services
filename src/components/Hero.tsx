import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

function Hero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      {/* Partículas de fundo animadas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Gradiente animado */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, #4f46e5, transparent 50%)',
            'radial-gradient(circle at 80% 50%, #7c3aed, transparent 50%)',
            'radial-gradient(circle at 50% 20%, #9333ea, transparent 50%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Conteúdo de texto */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-4 border border-white/10">
                🚀 Curso Lançamento
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Domine <span className="text-yellow-400">React 18</span> e <br />
                <span className="text-indigo-300">Vite</span> na Prática
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Aprenda com projetos reais e transforme-se em um desenvolvedor front-end 
                altamente qualificado em apenas 8 semanas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-yellow-500/30"
                >
                  Comece Agora <ArrowRight size={18} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:bg-white/20"
                >
                  <Play size={18} fill="currentColor" /> Ver Demonstração
                </motion.button>
              </div>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span>Turma com vagas abertas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span>Certificado reconhecido</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card do curso */}
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-indigo-500/30 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <button className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-300 transition-all shadow-lg">
                      <Play size={24} fill="currentColor" className="text-gray-900 pl-1" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-xl text-white">Curso React + Vite</h3>
                      <p className="text-gray-400">Domine as tecnologias modernas</p>
                    </div>
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                      Novidade
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                        ))}
                      </div>
                      <span>+120 alunos</span>
                    </div>
                    <div className="text-yellow-400 font-bold">
                      <span className="text-gray-400 line-through mr-2">R$ 997</span>
                      R$ 697
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
