import NavItem from "./NavItem";

function Navigation() {
  const links = [
    { to: "/#inicio", label: "Inicio" },
    { to: "/#categorias", label: "Categorías" },
    { to: "/#productos", label: "Productos" },
    { to: "/#contacto", label: "Contacto" },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {links.map(({ to, label }) => (
        <NavItem key={to} to={to}>
          {label}
        </NavItem>
      ))}
    </nav>
  );
}

export default Navigation;
