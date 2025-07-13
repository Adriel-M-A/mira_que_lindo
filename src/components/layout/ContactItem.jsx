function ContactItem({ Icon, children }) {
  return (
    <div className="flex items-center space-x-3">
      <Icon className="w-4 h-4 text-pink-300" />
      <span className="text-gray-300">{children}</span>
    </div>
  );
}

export default ContactItem;
