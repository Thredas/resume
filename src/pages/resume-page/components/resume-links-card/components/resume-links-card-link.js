import React from 'react';

import { BoldText } from 'components/text';

export const ResumeLinksCardLink = ({ linkName, link }) => {
  return (
    <a
      className="resume-links-card-link"
      rel="noopener noreferrer"
      target="_blank"
      href={link}
    >
      <BoldText className="resume-links-card-link-title">{linkName}</BoldText>
      <span className="material-icons-round">open_in_new</span>
    </a>
  );
};