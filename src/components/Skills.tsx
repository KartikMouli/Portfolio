"use client";

import TechCard from "./TechCard";
import data from "@/data/skills.json"

const Skills = () => {
    const techCardsItems = data.skills
    return (

        <div
            className="grid grid-cols-3 items-center justify-between gap-4"
        >
            {techCardsItems.map((cardItem) => (
                <TechCard key={cardItem.name} cardInfo={cardItem} />
            ))}
        </div>

    );
};

export default Skills;