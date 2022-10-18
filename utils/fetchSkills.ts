import { Skill } from "../typings";
import { server } from "../utils/config";

export const fetchSkills = async () => {
  const res = await fetch(`${server}/api/getSkills`);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
