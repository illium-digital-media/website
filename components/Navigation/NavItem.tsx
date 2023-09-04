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
    <>
      <div className={`${isActive ? 'text-cyan-400 max-sm:font-bold sm:border-b-2 border-cyan-400' : 'text-white'} sm:h-full sm:flex items-center`}>
        <Link href={props.pageLink} onClick={props.handleClick}>
          <span className={`px-5 max-sm:py-7 m-auto hover:text-cyan-400 duration-200 max-sm:flex sm:justify-center`}>
            {props.copy}
          </span>
        </Link>

        <hr className="bg-gradient-to-l from-transparent via-cyan-400 to-transparent h-0.5 border-t-0 border-transparent sm:hidden " />
      </div>

    </>

  );
};

export default NavItem;