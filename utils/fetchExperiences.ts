import { Experience } from "../typings";
import { server } from "../utils/config";

export const fetchExperiences = async () => {
  const res = await fetch(`${server}/api/getExperience`);
  // console.log(res);
  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  // console.log("experiences should be fetched here");

  return experiences;
};
