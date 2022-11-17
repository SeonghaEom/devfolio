import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionAwards = ({ awards }) => {
  return (
    <Section title="Awards">
      {awards.map((award) => (
        <SummaryItem
          key={award.name}
          name={award.name}
          description={award.description}
        />
      ))}
    </Section>
  );
};

export default SectionAwards;
