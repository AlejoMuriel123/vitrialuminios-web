import work from "../../assets/img/products/work-one.jpeg";
import workTwo from "../../assets/img/products/work-two.jpeg";
import workThree from "../../assets/img/products/work-three.jpeg";
import workFour from "../../assets/img/products/work-four.jpeg";
import workFive from "../../assets/img/products/work-five.jpeg";
import workSix from "../../assets/img/products/work-six.jpeg";

export default function Products() {
  const products = [
    { id: 1, image: work },
    { id: 2, image: workTwo },
    { id: 3, image: workThree },
    { id: 4, image: workFour },
    { id: 5, image: workFive },
    { id: 6, image: workSix },
  ];

  return (
    <div id="products" className="px-10 xl:px-40 py-20 bg-gray-100">
      <div className="flex jutify-center flex-col items-center">
        <p className="text-2xl xl:text-4xl text-center pt-10">
          Trabajos destacados
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {products.map((e) => (
            <div key={e.id} className="h-64">
              <img
                className="h-full w-full object-cover"
                src={e.image}
                alt="image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
