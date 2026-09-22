import getProvince from "@/services/getProvince";
import { it } from "node:test";

async function HomePage() {
  const provinces = await getProvince();

  return (
    <div>
      <div>
        {provinces.map((item) => (
          <div key={item.id}>
            <h1>{item.nameKh}</h1>
            <img className="w-[200px] h-[200px]" src={item.imageUrl} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
