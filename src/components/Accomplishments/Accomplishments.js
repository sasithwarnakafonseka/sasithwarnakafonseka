import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

// we kept the data inside our file instead of putting it on constants because it contains just 6 lines.
const data = [
  { text2: 'University College Dublin  2016–2020', text: 'BSC(hons)Computer Science'},
  { text2: 'Kingston University London  2021-2023 (Reading)', text: 'MSc in Advance Software Engineering', },
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Educations</SectionTitle>
    <Boxes>
      {data.map((card, i) => (
        <Box key={i}>
          <BoxText>{card.text}</BoxText>
          <BoxText>{card.text2}+</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
