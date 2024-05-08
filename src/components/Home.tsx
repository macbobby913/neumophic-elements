import MenuTop from "./MenuTop";

function Home() {
  return (
    <section className="flex gap-4 h-screen">
      <div className="w-[400px] h-full flex flex-col gap-4">
        <MenuTop />
        <div className="h-full shadow-neumorphicOuter rounded-xl">
          menu bottom
        </div>
      </div>
      <div className="w-full h-full rounded-xl shadow-neumorphicOuter">
        main
      </div>
    </section>
  );
}

export default Home;
