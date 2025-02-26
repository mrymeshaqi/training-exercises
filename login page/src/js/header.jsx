import Logo from "./logo";

function Header() {
  return (
    <div className="flex items-center justify-center gap-1 py-14">
      <h1 className="text-4xl text-[#202020] font-semibold">ClinicTalent</h1>
      <Logo />
    </div>
  );
}

export default Header;
