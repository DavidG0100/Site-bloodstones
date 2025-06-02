export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded transition ${className}`}
    >
      {children}
    </button>
  );
}
