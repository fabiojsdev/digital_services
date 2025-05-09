export default function LeadForm() {
  return (
    <section className="py-20 bg-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-indigo-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Garanta sua vaga agora!</h2>
              <p className="text-xl text-indigo-200 mb-6">
                Inscreva-se para receber um conteúdo exclusivo e desconto especial para a primeira turma.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Material gratuito de preparação
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Desconto de lançamento
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Acesso antecipado
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 w-full">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-indigo-700 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-indigo-700 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  Quero me inscrever!
                </button>
                
                <p className="text-sm text-indigo-300">
                  Não compartilhamos seus dados. Respeitamos sua privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
