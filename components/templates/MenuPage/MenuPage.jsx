import CardFood from "@/components/modules/CardFood/CardFood";

async function MenuPage() {
  const response = await fetch("http://localhost:4000/data");
  const data = await response.json();
  return (
    <div className="mt-[70px]">
      <div className="item_menu flex justify-between items-center flex-wrap ">
        {
          data.map((food) => (
            <div className="content_food  w-fit max-[768px]:w-full">
              <CardFood  {...food}/>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default MenuPage;
