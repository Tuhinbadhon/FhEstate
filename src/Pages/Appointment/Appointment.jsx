import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Appointment = () => {
  const { id } = useParams();
  const [agentName, setAgentName] = useState("");
  const [agentImage, setAgentImage] = useState("");
  const [agentDes, setAgentDes] = useState("");
  const [showAgents, setShowAgents] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split("T")[0];

    setMinDate(tomorrowFormatted);
  }, []);

  const handleDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };
  const handleTimeChange = (event) => {
    setAppointmentTime(event.target.value);
  };

  // today's date in the format yyyy-mm-dd
  const today = new Date().toISOString().split("T")[0];
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    if (id === "1") {
      setAgentName("Lary Jenkins");
      setAgentImage("https://i.ibb.co/QchKYNw/agent1.jpg");
      setAgentDes("Company Agent");
    } else if (id === "2") {
      setAgentName("Marky Pears");
      setAgentImage("https://i.ibb.co/gSwVD7F/agent2.jpg");
      setAgentDes("Property Lawyer");
    } else if (id === "3") {
      setAgentName("Henry Loren");
      setAgentImage("https://i.ibb.co/jG0PL59/agent3.png");
      setAgentDes("Company Agent");
    } else {
      setShowAgents(true);
    }
  }, [id]);

  return (
    <div className="my-10 ">
      <div className="hero min-h-screen bg-base-200 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex flex-col max-w-md p-6 dark:bg-gray-50 dark:text-gray-800">
            <img
              src={agentImage}
              alt=""
              className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold mt-5">{agentName}</h2>
              <span className=" pb-2 text-xl dark:text-gray-600 mb-4">
                {agentDes}
              </span>
              <p>
                <q>
                  {" "}
                  As an experienced real estate agent, {agentName} brings years
                  of industry expertise and a dedication to exceptional customer
                  service. Their commitment to understanding clients' needs,
                  coupled with their proactive approach, has earned them a
                  reputation for fostering strong, positive relationships.
                </q>
              </p>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Appointment Date
                  </span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered border-accent"
                  required
                  min={minDate} // Set min attribute to today's date
                  onChange={handleDateChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Time</span>
                </label>
                <input
                  type="time"
                  name="time"
                  className="input input-bordered border-accent"
                  min="10:00"
                  max="20:00"
                  onChange={handleTimeChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Topic</span>
                </label>
                <select className="select select-accent w-full max-w-xs">
                  <option disabled selected>
                    What do you want to discuss about?
                  </option>
                  <option>Selling Property</option>
                  <option>Buying Property</option>
                  <option>Renovation</option>
                  <option>Lease Property</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Any requirements?{" "}
                  </span>
                </label>
                <textarea
                  name="textArea"
                  className="input input-bordered border-accent"
                  rows="8"
                  cols="50"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Make An Appointment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
