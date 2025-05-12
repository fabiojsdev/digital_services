import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Desenvolvedor Front-end",
    avatar: "CS",
    content: "Este curso mudou minha carreira. Em 3 meses consegui meu primeiro emprego como dev!",
    rating: 5
  },
  {
    name: "Ana Oliveira",
    role: "UI Designer",
    avatar: "AO",
    content: "A didática é incrível. Finalmente entendi React de verdade depois de vários cursos.",
    rating: 5
  },
  {
    name: "Roberto Costa",
    role: "Estudante",
    avatar: "RC",
    content: "O suporte da comunidade é fantástico. Sempre tem alguém para ajudar quando preciso.",
    rating: 4
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            O que nossos alunos dizem
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Veja depoimentos de quem já transformou sua carreira
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-gray-700/50"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-gray-900 font-bold text-xl">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonials[current].name}</h4>
                  <p className="text-gray-400">{testimonials[current].role}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonials[current].rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-lg italic">"{testimonials[current].content}"</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
