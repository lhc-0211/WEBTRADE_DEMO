import IconGrid from "../../assets/icons/chart.svg?react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="h-[38px] px-4 bg-bg-nav flex flex-row gap-4 items-center">
      <img src={logo} alt="" className="h-[25px]" />
      <div className="flex flex-row">
        <div className="flex flex-row gap-2 px-4 items-center justify-center">
          <IconGrid width={16} height={16} fill="var(--color-blue)" />
          <p className="text-xs font-normal text-blue">Bảng giá</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
