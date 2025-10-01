// src/components/FallingSkills.js

import React from 'react';

const SkillIcon = ({ skill, index, total }) => {
  const Icon = skill.icon;
  // This calculates the position and delay for each icon
  const leftPosition = `${(index + 1) * (100 / (total + 1))}%`;
  const animationDelay = `${index * 0.2}s`;

  return (
    <div 
      className="absolute bottom-4 -translate-x-1/2 opacity-0" 
      style={{ left: leftPosition, animationDelay }}
    >
      <div 
        className="w-16 h-16 rounded-full text-white text-3xl flex items-center justify-center shadow-lg animate-fall-and-bounce"
        style={{ backgroundColor: skill.color }}
      >
        <Icon />
      </div>
    </div>
  );
};

export default function FallingSkills({ skills }) {
  // On mobile, we'll only show the first 5 skills to prevent clutter
  const skillsToRender = window.innerWidth < 768 ? skills.slice(0, 5) : skills;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {skillsToRender.map((skill, index) => (
        <SkillIcon 
          key={index} 
          skill={skill} 
          index={index} 
          total={skillsToRender.length} 
        />
      ))}
    </div>
  );
}