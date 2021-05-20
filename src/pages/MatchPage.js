import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localhost:3001/teams/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      console.log(data);
      setMatches(data);
    };

    fetchMatches();
  }, [teamName, year]);

  if (!matches || !matches.length) {
    return <h1>No matches found!</h1>;
  }

  return (
    <div className="MatchPage">
      <h1>Match Page</h1>

      {matches.map((match) => (
        <MatchDetailCard teamName={teamName} match={match} key={match.id} />
      ))}
    </div>
  );
};
