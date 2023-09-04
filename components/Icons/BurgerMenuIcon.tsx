const BurgerMenuIcon: React.FC = () => {
  return (
    <div className="space-y-2 cursor-pointer">
      {[...Array(3)].map((_, index) => (
        <span
          key={index}
          className={`block h-0.5 w-8 bg-white`}
        />
      ))}
    </div>
  );
};

export default BurgerMenuIcon;
