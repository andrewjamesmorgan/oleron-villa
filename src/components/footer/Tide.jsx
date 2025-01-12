import TideTime from "./Tide/TideTime";

export default function Tide({tideData}) {
  return (
    <div className="tide-times" id="footer-tide-times">
      <div id="tide-rimes-container">
        {tideData && tideData.map((tide, index) => {
          return (
            <TideTime key={index} tide={tide} />
          );
        })}
        </div>
      </div>
  );
}