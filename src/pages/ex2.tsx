import getAttractionById from "@/services/getAttractionById";

async function Ex2(){
    const attraction = await getAttractionById(1);

    return (
      <div>
        <h1>{attraction.nameEn}</h1>
        <h1>{attraction.nameKh}</h1>
      </div>
    );
}

export default Ex2;