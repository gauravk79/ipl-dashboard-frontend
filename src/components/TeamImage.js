export const TeamImage = ({ teamName }) => {
  const pngImages = [
    "rising pune supergiant",
    "gujarat lions",
    "pune warriors",
    "kochi tuskers kerala",
  ];

  let imageName = teamName.replace(/ /g, "-").toLowerCase() + "-logo";

  imageName += pngImages.includes(teamName.toLowerCase()) ? ".png" : ".svg";
  console.log(imageName);

  return <img src={`/images/${imageName}`} alt={teamName} />;
};
