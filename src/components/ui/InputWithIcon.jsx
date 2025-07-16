import { Mail } from "lucide-react";

function InputWithIcon({ icon: Icon = Mail, className = "", ...props }) {
  return (
    <div className="relative flex-1">
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        className={`pl-10 py-3 text-lg border-2 border-pink-200 focus:border-pink-300 rounded-md ${className}`}
        {...props}
      />
    </div>
  );
}

export default InputWithIcon;
