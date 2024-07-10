import { SkillCard } from "../pages/types";

export const SkillBox = ({ skill }: { skill: SkillCard }) => {
    return (
        <div
            className={`rounded-2xl drop-shadow-xl
        flex justify-center items-center
        text-xs md:text-sm lg:text-base text-center text-white p-5 ${skill.background}`}
        >
            {skill.desc[0]}
        </div>
    );
};
