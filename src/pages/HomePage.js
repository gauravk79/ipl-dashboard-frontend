import { React, useEffect, useState } from "react";
import { HeaderSection } from "../components/HeaderSection";
import { TeamTile } from "../components/TeamTile";

import "./HomePage.scss";

export const HomePage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch(`http://localhost:3001/teams`);
      const data = await response.json();
      setTeams(data);
    };

    fetchTeams();
  }, []);
  return (
    <div className="HomePage">
      <div className="team-grid">
        {teams.map((team) => (
          <TeamTile teamName={team.teamName} key={team.id} />
        ))}
      </div>
    </div>
  );
};
