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
      title: "Login to know more",
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
      <div className="text-center max-w-screen-sm mx-auto px-2 lg:px-0 mb-6">
        <h1 className="text-lg font-medium lg:text-3xl lg:font-bold  ">
          Latest Property Collections
        </h1>
        <p className="text-sm lg:text-lg font-normal">
          Explore our websites latest property collection, featuring
          meticulously curated listings showcasing unparalleled quality and
          diversity, ensuring every visitor finds their dream property
          effortlessly.
        </p>
      </div>

      {/* card section */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {properties.map((property, index) => (
          <div
            key={property.id}
            className=""
            onMouseEnter={() => toggleHoverState(index)}
            onMouseLeave={() => toggleHoverState(index)}
          >
            <div
              className={`card w-auto bg-base-100 shadow-xl ${
                hoverStates[index] ? "animate__animated animate__bounce" : ""
              }`}
            >
              <figure className="w-full h-[200px] p-3">
                <img
                  className="rounded-xl"
                  src={property.image}
                  alt={property.tag}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {property.title}
                  <div className="badge badge-secondary">
                    {" "}
                    {property.status}{" "}
                  </div>
                </h2>
                <p>{property.location} </p>
                <p>Total Area of : {property.area} </p>
                <div className="mt-4 flex flex-row justify-between  ">
                  {user ? (
                    <Link to={`/property/${property.id}`}>
                      <button className="btn btn-secondary rounded-3xl">
                        Know More
                      </button>
                    </Link>
                  ) : (
                    <button
                      onClick={viewDetailsDeny}
                      className="btn btn-secondary rounded-3xl"
                    >
                      Know More
                    </button>
                  )}

                  <div className="card-actions justify-end  my-auto">
                    <div className="badge badge-outline">
                      {" "}
                      {property.tag[0]}{" "}
                    </div>
                    <div className="badge badge-outline">{property.tag[1]}</div>
                  </div>
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
