import Link from "next/link";
import { useRouter } from "next/router";


const NavItem: React.FC<{
  pageLink: string;
  handleClick: () => void;
  copy: string;
}> = (props) => {
  const router = useRouter();
  const isActive = router.pathname === props.pageLink;
  return (
    <li className={`${isActive ? 'border-b-2 border-cyan-400 text-cyan-400' : ''} p-5 m-auto text-md hover:text-cyan-400 duration-200 text-white`}>
      <Link href={props.pageLink} onClick={props.handleClick}>
        {props.copy}
      </Link>
    </li>
  );
};

export default NavItem;
