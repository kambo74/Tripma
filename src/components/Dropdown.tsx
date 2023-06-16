import PersonSolid from "../assets/person_solid.svg";

function Dropdown() {
  return (
    <div className="border py-2 pl-4 pr-8 relative relative border shadow-md ">
      <img src={PersonSolid} alt="person" className="absolute bottom-1" />
      <span className="pl-8 pr-2 whitespace-nowrap">1 Adult</span>
    </div>
  );
}

export default Dropdown;
