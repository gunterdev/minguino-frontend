type Props = {
  icon?: JSX.Element;
  text?: string;
  isActive?: boolean;
};

function NavItem({ icon, text, isActive }: Props) {
  return (
    <li>
      <a
        className={`${
          isActive ? "active" : ""
        } inline-flex w-auto items-center p-2 rounded-full ease-in-out duration-200 hover:bg-slate-200`}
        href="#"
      >
        {icon ? icon : null}
        <span className="px-3 hidden md:inline">{text}</span>
      </a>
    </li>
  );
}

export default NavItem;
