// Muestra un contador sobre un icono
function Badge({ count }) {
  if (count <= 0) return null;
  return (
    <span className="absolute -top-2 -right-2 bg-pink-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {count}
    </span>
  );
}

export default Badge;
