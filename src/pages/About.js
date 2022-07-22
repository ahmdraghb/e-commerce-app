import { Link, Route, Routes } from "react-router-dom";
import AboutCompany from "./AboutCompany";
import AboutTeam from "./AboutTeam";

const About = () => {
  return (
    <>
      <h1>About</h1>

      <div className="row">
        <div className="col-3" style={{ borderRight: "3px solid yellow" }}>
          <Link
            style={{
              display: "block",
              textDecoration: "none",
              color: "#371B58",
            }}
            to="/about/team"
          >
            About Team
          </Link>
          <Link
            to="/about/company"
            style={{ textDecoration: "none", color: "#371B58" }}
          >
            About Company
          </Link>
        </div>

        <div className="col-9">
          {" "}
          <Routes>
            <Route path="company" element={<AboutCompany />} />
            <Route path="team" element={<AboutTeam />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default About;
