import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";

import "./MatchPage.scss";
import { YearSelector } from "../components/YearSelector";

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

  return (
    <div className="MatchPage">
      <div className="year-selector">
        <h3>Select Year</h3>
        <YearSelector teamName={teamName} selectedYear={year} />
      </div>
      <div>
        <h1 className="page-heading">
          <Link to={`/teams/${teamName}`}>{teamName}</Link> matches in {year}
        </h1>
        {matches.length > 0 ? (
          matches.map((match) => (
            <MatchDetailCard teamName={teamName} match={match} key={match.id} />
          ))
        ) : (
          <h3>No Matches found!</h3>
        )}
      </div>
    </div>
  );
};
