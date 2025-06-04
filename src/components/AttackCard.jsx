export default function AttackCard({ imageSrc, title, description }) {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-lg shadow-xl p-6 text-center w-full h-full border border-transparent hover:border-yellow-500/40 hover:bg-black/60 transition-all duration-300 transform hover:scale-105">
      <div className="h-52 bg-gray-900/50 rounded-lg mb-4 overflow-hidden flex items-center justify-center shadow-inner -mx-2">
        <img 
          src={imageSrc} 
          alt={title} 
          className="object-cover h-full w-full rounded-lg" 
        />
      </div>
      <h3 className="text-yellow-400 text-lg font-bold mb-3 tracking-wide">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
