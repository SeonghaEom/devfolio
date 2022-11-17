import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionResearch = ({ researches }) => {
  if (!researches.length) return null;

  return (
    <Section title="Research">
      {researches.map((research) => (
        <SummaryItem
          key={research.name}
          name={research.name}
          description={research.description}
          link={research.link}
        />
      ))}
    </Section>
  );
};

export default SectionResearch;
