// components/AttackCard.jsx
export default function AttackCard({ imageSrc, title, description }) {
  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-3 text-center w-full h-full">
      <div className="h-36 bg-gray-700 rounded mb-3 overflow-hidden flex items-center justify-center">
        <img src={imageSrc} alt={title} className="object-cover h-full w-full" />
      </div>
      <h3 className="text-yellow-500 text-base font-bold mb-1">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}
