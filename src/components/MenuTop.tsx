import { Home, Lollipop, Search } from "lucide-react";

function MenuTop() {
  return (
    <div className="shadow-neumorphicOuter rounded-xl flex flex-col gap-4 p-4">
      <div className="flex items-center">
        <Lollipop className="text-primary" size={30} />
        <p className="text-primary text-3xl font-comic font-extrabold">
          LolliPOP
        </p>
      </div>
      <div className="flex items-center gap-4 text-greyDark shadow-neumorphicOuter p-4 rounded-2xl cursor-pointer transition ease-in-out hover:text-primary active:shadow-neumorphicInner">
        <Home />
        <p className="text-2xl font-extrabold">Home</p>
      </div>
      <div className="flex items-center gap-4 text-greyDark shadow-neumorphicOuter p-4 rounded-2xl cursor-pointer transition ease-in-out hover:text-primary active:shadow-neumorphicInner">
        <Search />
        <p className="text-2xl font-extrabold">Search</p>
      </div>
    </div>
  );
}

export default MenuTop;
