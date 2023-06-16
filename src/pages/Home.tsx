import Navbar from "../components/Navbar";
import DepartureImg from "../assets/departure.svg";
import ArrivalImg from "../assets/arrival.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { COLORS } from "../utils/colors";
import Dropdown from "../components/Dropdown";

function Home() {
  const [departDate, setDepartDate] = useState(null as Date | null);
  const [arriveDate, setArriveDate] = useState(null as Date | null);
  return (
    <section className="h-screen">
      <Navbar />
      <h3
        className="text-center text-8xl font-extrabold mt-24 mb-12
      bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text
      "
      >
        It&rsquo;s more than
        <br />
        just a trip
      </h3>
      <section>
        <form className="flex justify-center">
          <div className="relative border rounded-l shadow-md">
            <img src={DepartureImg} alt="departure" className="absolute p-1 pl-3" />
            <input
              type="text"
              placeholder="From where?"
              className="py-2 pl-12 pr-2"
            />
          </div>
          <div className="relative border shadow-md">
            <img src={ArrivalImg} alt="arrival" className="absolute p-1 pl-3" />
            <input
              type="text"
              placeholder="Where to?"
              className="py-2 pl-12 pr-2"
            />
          </div>
          <div>
            <DatePicker
              className="py-2 pl-4 border shadow-md"
              selected={departDate}
              onChange={(date) => setDepartDate(date)}
              placeholderText="Departure date"
            />
          </div>
          <div>
            <DatePicker
              className="py-2 pl-4 border shadow-md"
              selected={arriveDate}
              onChange={(date) => setArriveDate(date)}
              placeholderText="Return date"
            />
          </div>
          <div className="self-center">
            <Dropdown />
          </div>
          <button className={`bg-[${COLORS.primaryCol}] text-white rounded px-4 py-1`}>Search</button>
        </form>
      </section>
    </section>
  );
}

export default Home;
