const BurgerMenuIcon: React.FC = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <span
          key={index}
          className={`block h-0.5 w-8 bg-white`}
        />
      ))}
    </>
  );
};

export default BurgerMenuIcon;
