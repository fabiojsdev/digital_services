import { Code, Monitor, Rocket, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Código Moderno",
    description: "Aprenda as melhores práticas com React 18, Hooks e Vite"
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Projetos Reais",
    description: "Desenvolva 5 aplicações completas para seu portfólio"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Aceleração",
    description: "Metodologia que reduz o tempo de aprendizado em 60%"
  },
  {
    icon: <BadgeCheck className="w-8 h-8" />,
    title: "Certificado",
    description: "Certificação reconhecida no mercado de trabalho"
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Recursos Exclusivos
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tudo o que você precisa para dominar React e Vite em tempo recorde
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-yellow-400/30 transition-all hover:-translate-y-2"
            >
              <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-gray-900">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
