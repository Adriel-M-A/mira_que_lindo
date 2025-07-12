import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

function Image({ src, alt, width, height, className = "" }) {
  const [hasError, setHasError] = useState(false);

  // Si no hay src o hubo error, mostramos el placeholder
  if (!src || hasError) {
    return (
      <div
        className={`
          ${className}
          bg-gray-50
          rounded-3xl
          shadow-2xl
          flex items-center justify-center
          overflow-hidden
        `}
        style={{ width, height }}
      >
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <ImageIcon className="w-8 h-8 text-gray-300" />
          </div>
        </div>
      </div>
    );
  }

  // Si la imagen carga bien
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
