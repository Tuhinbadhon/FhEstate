import React from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";
const PlotDetails = () => {
  const { id } = useParams();
  const plotVar = useLoaderData();

  const plotId = parseInt(id);
  const plot = plotVar.find((plot) => plot.id === plotId);

  return (
    <div className="my-10 p-2">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className=" ">
          <img src={plot.image} alt="Album" className="p-4  " />
        </figure>
        <div className="card-body">
          <div className="flex flex-row justify-between">
            <h2 className="card-title">{plot.title} </h2>
            <div className="card-actions justify-end  my-auto">
              <div className="badge badge-outline"> {plot.tag[0]} </div>
              <div className="badge badge-outline">{plot.tag[1]}</div>
            </div>
          </div>

          <p>[ {plot.location} ]</p>
          <p>{plot.description} </p>
          <p>
            {" "}
            <b>Area : </b> {plot.area}{" "}
          </p>
          <p>
            <b>Facilitites : </b>
            {plot.facilities[0]} , {plot.facilities[1]} ,{plot.facilities[2]}
            &nbsp; and many more....
          </p>
          <p>
            {" "}
            <b>Available for : </b> {plot.status}{" "}
          </p>
          <p>
            <b>Price : </b>
            {plot.price}{" "}
          </p>

          <Link to="/" className="card-actions justify-end mt-4">
            <button className="btn max-[450px]:w-full btn-primary">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlotDetails;
