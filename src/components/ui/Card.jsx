/**
 * Card: contenedor con fondo, bordes redondeados y sombra
 * - className: para extender estilos (Tailwind)
 * - ...props: cualquier otro atributo (onClick, style, etc.)
 */
export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`
        rounded-3xl
        shadow-lg
        overflow-hidden
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * CardContent: área interna del Card con padding
 */
export function CardContent({ children, className = "", ...props }) {
  return (
    <div
      className={`
        p-6
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
