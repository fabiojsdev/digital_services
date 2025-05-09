export default function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'Aprendizado Acelerado',
      description: 'Metodologia que reduz o tempo de aprendizado em até 60%'
    },
    {
      icon: '👨‍💻',
      title: 'Projetos Reais',
      description: 'Portfólio com 5 projetos profissionais ao final do curso'
    },
    {
      icon: '🎓',
      title: 'Certificado',
      description: 'Certificado reconhecido no mercado de trabalho'
    },
    {
      icon: '🤝',
      title: 'Comunidade',
      description: 'Acesso a comunidade exclusiva de alunos'
    }
  ];

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que você vai aprender</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nosso curso foi projetado para levar você do básico ao avançado de forma prática e eficiente
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
