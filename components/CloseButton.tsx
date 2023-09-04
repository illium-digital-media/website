const CloseButton: React.FC<{ handleClose: () => void }> = (props) => {

  return (
    <button
      aria-label="close menu"
      className={`text-white`}
      onClick={props.handleClose}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 max-sm:h8 max-sm:w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default CloseButton;
