import Button from "./Button";
import Badge from "./Badge";

function IconButton({ icon: Icon, badgeCount = 0, ...props }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-gray-700 hover:text-pink-400 relative"
      {...props}
    >
      <Icon className="w-5 h-5" />
      <Badge count={badgeCount} />
    </Button>
  );
}

export default IconButton;
