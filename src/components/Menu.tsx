import { menuImage } from "../config";

function Menu() {
  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center border-y-[4px] border-primary">
      {<img src={menuImage.TH} alt="menu" />}
    </div>
  );
}

export default Menu;
