export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Curso React+Vite</h3>
            <p className="text-gray-400 max-w-md">
              Transformando iniciantes em desenvolvedores profissionais desde 2023.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-300 transition">Início</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-300 transition">Sobre</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-300 transition">Curso</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-300 transition">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-300 transition">Termos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-300 transition">Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-300 transition">Cookies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Social</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-300 transition">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-yellow-300 transition">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-yellow-300 transition">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Curso TechTudo. Todos os direitos reservados. Desenvolvido com </p>
          <p className="text-sm"> Feito com ❤️ por Connections tree</p>
        </div>
      </div>
    </footer>
  );
}
