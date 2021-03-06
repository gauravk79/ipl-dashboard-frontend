import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";

import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

import "./TeamPage.scss";
import { TeamImage } from "../components/TeamImage";

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();
  const endYear = process.env.REACT_APP_DATA_END_YEAR;

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/teams/${teamName}`
      );
      const data = await response.json();
      console.log(data);
      setTeam(data);
    };

    fetchMatches();
  }, [teamName]);

  if (!team || !team.teamName) {
    return <h1>Team not found!</h1>;
  }

  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <TeamImage teamName={team.teamName} />
        <h1 className="team-name">{team.teamName}</h1>
      </div>
      <div className="win-loss-section">
        Wins / Losses
        <PieChart
          data={[
            {
              title: "Losses",
              value: team.totalMatches - team.totalWins,
              color: "#e15233",
            },
            { title: "Wins", value: team.totalWins, color: "green" },
          ]}
        />
      </div>
      <div className="match-detail-section">
        <h3>Latest Matches</h3>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </div>

      {team.matches.slice(1).map((match) => (
        <MatchSmallCard teamName={team.teamName} match={match} key={match.id} />
      ))}
      <div className="more-link">
        <Link to={`/teams/${teamName}/matches/${endYear}`}>More ></Link>
      </div>
    </div>
  );
};
