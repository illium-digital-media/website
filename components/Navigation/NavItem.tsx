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
    <Link href={props.pageLink} onClick={props.handleClick}>
      <li className={`${isActive ? 'lg:border-b-2 lg:border-cyan-400 text-cyan-400 max-lg:font-bold' : 'text-white'} p-5 m-auto hover:text-cyan-400 duration-200 max-lg:flex justify-center`}>
        {props.copy}
      </li>
    </Link>

  );
};

export default NavItem;