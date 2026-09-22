import getProvinceByID from "@/services/getprovinceByID";

async function Ex() {
  const province = await getProvinceByID(1);

  return (
    <div>
      <div>
        <h1>{province.nameKh}</h1>
        <img
          className="w-[200px] h-[200px]"
          src={province.imageUrl}
          alt={province.nameKh}
        />
      </div>
    </div>
  );
}

export default Ex;
