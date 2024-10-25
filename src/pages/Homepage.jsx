import BasicGrid from "../components/BasicGrid";
import ClockDisplay from "../components/ClockDisplay";
import CustomCard from "../components/CustomCard";

export default function Homepage() {
  return (
    <div className="Homepage">
      <h1>Home</h1>
      <ClockDisplay />
      <BasicGrid />
      
    </div>
  );
}
