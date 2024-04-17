import React, { useContext, useEffect, useState } from "react";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const Plots = () => {
  const [properties, setProperties] = useState([]);
  const [hoverStates, setHoverStates] = useState([]);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("estatesData.json")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);

        setHoverStates(Array(data.length).fill(false));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Toggle hover state for a card at a given index
  const toggleHoverState = (index) => {
    setHoverStates((prevStates) => {
      const newHoverStates = [...prevStates];
      newHoverStates[index] = !newHoverStates[index];
      return newHoverStates;
    });
  };
  const viewDetailsDeny = () => {
    Swal.fire({
      title: "Please Login to know more",
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Login",
      // denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };

  return (
    <div className="">
      {/* paragraph section */}
      <div className="text-center max-w-screen-sm mx-auto  px-2 lg:px-0 mb-6 lg:mt-20">
        <h1 className="text-lg font-medium lg:text-3xl lg:font-bold  ">
          Our Property Collections
        </h1>
        <p className="text-sm lg:text-lg font-normal lg:mt-10">
          Discover our website's newest array of properties, carefully
          handpicked to offer a diverse range of options, ensuring that each
          visitor discovers their ideal property effortlessly. Our collection
          embodies unparalleled quality and variety, promising an unparalleled
          experience for every prospective buyer.
        </p>
      </div>

      {/* card section */}
      <div className="grid sm:grid-cols-1 max-[450px]:mx-4   md:grid-cols-2 lg:grid-cols-3 lg:mt-10 gap-4 lg:gap-6">
        {properties.map((property, index) => (
          <div
            key={property.id}
            className=""
            onMouseEnter={() => toggleHoverState(index)}
            onMouseLeave={() => toggleHoverState(index)}
          >
            <div
              className={`card border h-full w-auto bg-base-100 shadow-xl ${
                hoverStates[index] ? "animate__animated animate__zoomIn" : ""
              }`}
            >
              <figure className="  p-4">
                <img
                  className="rounded-xl"
                  src={property.image}
                  alt={property.tag}
                />
              </figure>
              <div className=" p-5">
                <h2 className="card-title">
                  {property.title}
                  <sup className="text-xs text-white bg-indigo-400 px-2 py-1 rounded-full">
                    {property.status}
                  </sup>
                </h2>

                <p>{property.location} </p>
                <p>Total Area of : {property.area} </p>
                <div className="mt-4 flex flex-row justify-between  ">
                  <div className=" flex gap-1  my-auto">
                    <div className="badge p-3 badge-outline">
                      {" "}
                      {property.tag[0]}{" "}
                    </div>
                    <div className="badge p-3 badge-outline">
                      {property.tag[1]}
                    </div>
                  </div>
                  {user ? (
                    <Link to={`/property/${property.id}`}>
                      <button className="btn bg-indigo-400 text-white rounded-xl">
                        View Details
                      </button>
                    </Link>
                  ) : (
                    <button
                      onClick={viewDetailsDeny}
                      className="btn bg-indigo-400 text-white rounded-xl"
                    >
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plots;
