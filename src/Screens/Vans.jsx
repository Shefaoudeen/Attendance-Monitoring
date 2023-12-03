import React from "react";

const Vans = () => {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  const vanElement = vans.map((van) => (
    <div key={van.id} className="bg-slate-200 rounded-xl pb-2">
      <img src={van.imageUrl} className="rounded-xl" />
      <div className="flex justify-between px-1">
        <h1 className="font-bold">{van.name}</h1>
        <p>
          ${van.price}
          <span className="font-bold">/day</span>
        </p>
      </div>
      <i className="border-none bg-orange-400 text-white font-sans px-2 mt-2 rounded-sm ml-2">
        {van.type}
      </i>
    </div>
  ));
  return (
    <div>
      <div className="bg-yellow-50">
        <h1 className="font-bold text-xl px-2">Explore our van options</h1>
        <div className="flex justify-around my-2">
          <button className=" px-2 bg-amber-100 text-amber-600 rounded-lg">
            Simple
          </button>
          <button className=" px-2 bg-amber-100 text-amber-600 rounded-lg">
            Rugged
          </button>
          <button className=" px-2 bg-amber-100 text-amber-600 rounded-lg">
            Luxury
          </button>
          <button className=" px-2 bg-amber-100 text-amber-600 rounded-lg">
            Other filters
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 px-3 my-4">{vanElement}</div>;
    </div>
  );
};

export default Vans;
