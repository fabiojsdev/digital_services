function Hero() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Decoração de fundo (opcional) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Texto principal */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Domine <span className="text-yellow-300">React</span> e Vite em 
              <span className="block">poucas semanas</span>
            </h1>

            <p className="text-xl mb-8 text-gray-200">
              Transforme-se em um desenvolvedor front-end de elite com nosso 
              curso intensivo. Aprenda com especialistas e construa projetos reais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                Inscreva-se Agora
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Saiba Mais
              </button>
            </div>
          </div>

          {/* Imagem ilustrativa (substitua por uma imagem real) */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 flex items-center justify-center">
              <span className="text-5xl">📚</span>
              {/* Você pode substituir por uma imagem real do curso */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
