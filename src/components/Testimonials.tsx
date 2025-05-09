export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Desenvolvedor Front-end',
      avatar: '👨',
      content: 'Este curso mudou minha carreira. Em 3 meses consegui meu primeiro emprego como dev!'
    },
    {
      name: 'Ana Oliveira',
      role: 'UI Designer',
      avatar: '👩',
      content: 'A didática é incrível. Finalmente entendi React de verdade depois de vários cursos.'
    },
    {
      name: 'Roberto Costa',
      role: 'Estudante',
      avatar: '🧑',
      content: 'O suporte da comunidade é fantástico. Sempre tem alguém para ajudar quando preciso.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">O que nossos alunos dizem</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja depoimentos de quem já transformou sua carreira com nosso método
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
              <div>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-indigo-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
