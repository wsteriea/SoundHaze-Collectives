export default function AlbumCard({ imageSrc, title, subtitle, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Make image square */}
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <h4 className="text-base italic text-gray-700 mb-1">{subtitle}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
