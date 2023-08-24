import MoonIcon from "../Icons/Moon";
import SunIcon from "../Icons/Sun";
import { useSelector, useDispatch } from 'react-redux';
import { darkModeActions, DarkModeState } from '../../store/slices/darkmode';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const showDarkMode = useSelector((state: DarkModeState) => state.showDarkMode);

  const toggleDarkMode = () => {
    dispatch(darkModeActions.toggle());
  }
  
  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center p-2 rounded-full hover:text-primary"
    >
      {showDarkMode ? (
        <SunIcon color={"text-white"} hoverColor={"text-primary"} />
      ) : (
        <MoonIcon />
      )}
    </button>
  );
};

export default DarkModeToggle;
