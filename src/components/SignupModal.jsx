import { useState } from 'react';

export default function SignupModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:3001/api/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setError(data.message);
      }
      
    } catch (error) {
      setError('Erro de conexão. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({ nome: '', email: '', telefone: '' });
    setIsSubmitted(false);
    setIsLoading(false);
    setError('');
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-2xl w-full max-w-md transform transition-all border-2 border-yellow-600 relative overflow-hidden">
        {/* Decorative border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-red-600/20 pointer-events-none"></div>
        
        {/* Header do Modal */}
        <div className="flex justify-between items-center p-6 border-b border-yellow-600/30 relative z-10">
          <h3 className="text-xl font-bold text-yellow-400 tracking-wide">
            {isSubmitted ? '⚔️ GUERREIRO REGISTRADO!' : '⚔️ JUNTE-SE À BATALHA'}
          </h3>
          <button
            onClick={handleClose}
            className="text-yellow-400 hover:text-red-400 text-3xl font-bold transition-colors"
          >
            ×
          </button>
        </div>

        {/* Conteúdo do Modal */}
        <div className="p-6 relative z-10">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Exibir erro se houver */}
              {error && (
                <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded-md mb-4">
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="nome" className="block text-sm font-bold text-yellow-400 mb-2 tracking-wide">
                  🛡️ NOME DO GUERREIRO
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-yellow-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white placeholder-gray-400 transition-all"
                  placeholder="Digite seu nome de guerra"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-yellow-400 mb-2 tracking-wide">
                  📜 PERGAMINHO MÁGICO (E-MAIL)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-yellow-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white placeholder-gray-400 transition-all"
                  placeholder="Digite seu e-mail mágico"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-bold text-yellow-400 mb-2 tracking-wide">
                  🔮 CRISTAL DE COMUNICAÇÃO (TELEFONE)
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-yellow-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white placeholder-gray-400 transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black py-4 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg tracking-wide transition-all transform hover:scale-105 shadow-lg"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                    FORJANDO CONTA...
                  </div>
                ) : (
                  '⚔️ ENTRAR NA BATALHA'
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 mb-6 shadow-lg">
                <svg className="h-10 w-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-yellow-400 mb-3 tracking-wide">
                🏆 BEM-VINDO À GUILDA!
              </h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Parabéns, <span className="text-yellow-400 font-bold">{formData.nome}</span>! <br/>
                Sua jornada épica em <span className="text-red-400 font-bold">Bloodstones</span> está prestes a começar. 
                Prepare-se para batalhas lendárias!
              </p>
              <button
                onClick={handleClose}
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white py-3 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 font-bold tracking-wide transition-all transform hover:scale-105 shadow-lg"
              >
                🗡️ COMEÇAR AVENTURA
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}