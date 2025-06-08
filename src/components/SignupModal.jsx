import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function SignupModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Para monitprar os estados dos campos
  const [fieldErrors, setFieldErrors] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
  });

  // Validação campos
  const validateField = (name, value) => {
    switch (name) {
      case "nome":
        if (value.length < 3) return "O nick deve ter entre 3 e 16 caracteres.";
        if (value.length > 16) return "O nick deve ter no máximo 16 caracteres.";
        return "";
      case "email":
        if (value.length > 254) return "O e-mail deve ter no máximo 254 caracteres.";
        //e-mail válido
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "E-mail inválido.";
        return "";
      case "telefone":
        if (value.length > 15) return "O telefone deve ter no máximo 15 caracteres.";
        return "";
      case "senha":
        if (value.length < 6) return "A senha deve ser entre 6 a 16 caracteres.";
        if (value.length > 16) return "A senha deve ter no máximo 16 caracteres.";
        return "";
      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFieldErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));

    if (error) setError("");
  };

  const isFormValid = () => {
    for (const key in formData) {
      if (!formData[key] || validateField(key, formData[key])) return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validateField(key, formData[key]);
    });
    setFieldErrors(newErrors);

    if (Object.values(newErrors).some((msg) => msg)) {
      setError("Corrija os erros antes de continuar.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3001/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({ nome: "", email: "", telefone: "", senha: "" });
    setFieldErrors({ nome: "", email: "", telefone: "", senha: "" });
    setIsSubmitted(false);
    setIsLoading(false);
    setError("");
    setShowPassword(false);
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

        <div className="flex justify-between items-center p-6 border-b border-yellow-600/30 relative z-10">
          <h3 className="text-xl font-bold text-yellow-400 tracking-wide">
            {isSubmitted ? "⚔️ GUERREIRO REGISTRADO!" : "⚔️ JUNTE-SE À BATALHA"}
          </h3>
          <button
            onClick={handleClose}
            className="text-yellow-400 hover:text-red-400 text-3xl font-bold transition-colors"
          >
            ×
          </button>
        </div>

        <div className="p-6 relative z-10">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Exibir erro geral se houver */}
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
                  minLength={3}
                  maxLength={16}
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-yellow-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white placeholder-gray-400 transition-all"
                  placeholder="Digite seu nome de guerra"
                />
                {fieldErrors.nome && (
                  <p className="text-red-400 text-xs mt-1">{fieldErrors.nome}</p>
                )}
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
                  maxLength={254}
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-yellow-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white placeholder-gray-400 transition-all"
                  placeholder="Digite seu e-mail mágico"
                />
                {fieldErrors.email && (
                  <p className="text-red-400 text-xs mt-1">{fieldErrors.email}</p>
                )}
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
                  maxLength={15}
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-yellow-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white placeholder-gray-400 transition-all"
                  placeholder="(00) 00000-0000"
                />
                {fieldErrors.telefone && (
                  <p className="text-red-400 text-xs mt-1">{fieldErrors.telefone}</p>
                )}
              </div>

              <div>
                <label htmlFor="senha" className="block text-sm font-bold text-yellow-400 mb-2 tracking-wide">
                  🔐 SENHA DO GUERREIRO
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="senha"
                    name="senha"
                    value={formData.senha}
                    onChange={handleInputChange}
                    required
                    minLength={6}
                    maxLength={16}
                    className="w-full px-4 py-3 bg-gray-800 border-2 border-yellow-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white placeholder-gray-400 transition-all pr-10"
                    placeholder="Digite sua senha secreta"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-yellow-400 hover:text-yellow-300 focus:outline-none"
                    tabIndex={-1}
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
                  </button>
                </div>
                {fieldErrors.senha && (
                  <p className="text-red-400 text-xs mt-1">{fieldErrors.senha}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading || !isFormValid()}
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black py-4 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg tracking-wide transition-all transform hover:scale-105 shadow-lg"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                    FORJANDO CONTA...
                  </div>
                ) : (
                  "⚔️ ENTRAR NA BATALHA"
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 mb-6 shadow-lg">
                <svg
                  className="h-10 w-10 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-yellow-400 mb-3 tracking-wide">🏆 BEM-VINDO À GUILDA!</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Parabéns, <span className="text-yellow-400 font-bold">{formData.nome}</span>! <br />
                Sua jornada épica em <span className="text-red-400 font-bold">Bloodstones</span> está prestes a começar.
                Prepare-se para batalhas lendárias!
              </p>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white py-3 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 font-bold tracking-wide transition-all transform hover:scale-105 shadow-lg">
                  🗡️ COMEÇAR AVENTURA
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
