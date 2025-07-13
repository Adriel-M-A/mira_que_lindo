import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

/**
 * Image fallback que NO define su propio border-radius ni shadow:
 * esas clases vienen del contenedor padre.
 */
function Image({ src, alt, width, height, className = "" }) {
  const [hasError, setHasError] = useState(false);

  // Placeholder (sin rounded ni shadow)
  if (!src || hasError) {
    return (
      <div
        className={`
          ${className}
          bg-gray-100       /* color de fondo del placeholder */
          flex items-center justify-center
          overflow-hidden
        `}
        style={{ width, height }}
      >
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    );
  }

  // Imagen cargada (objeto cover)
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} object-cover`}
      onError={() => setHasError(true)}
    />
  );
}

export default Image;
