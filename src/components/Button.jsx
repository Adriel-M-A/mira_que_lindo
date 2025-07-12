// Componente base de botón, acepta variante y tamaño
function Button({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium transition-colors";
  const variants = {
    default: "bg-pink-400 text-white hover:bg-pink-500",
    ghost: "bg-transparent hover:bg-pink-50 rounded-lg",
  };
  const sizes = {
    md: "px-4 py-2 text-sm",
    icon: "p-2",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
