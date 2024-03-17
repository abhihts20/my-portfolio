import React, { useState, useEffect } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip'

interface ExternalLinkWithTooltipProps {
  href: string;
  tooltipText: string;
  children: React.ReactNode;
}

const ExternalLinkWithTooltip: React.FC<ExternalLinkWithTooltipProps> = ({
  href,
  tooltipText,
  children
}) => {
  const [tooltipId, setTooltipId] = useState<string | null>(null);

  useEffect(() => {
    const id = Math.random().toString(36).substring(7);
    setTooltipId(id);
  }, []);

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-tip
        data-for={tooltipId}
      >
        {children}
      </a>
      <ReactTooltip id={tooltipId ?? ''} place="top">
        {tooltipText}
      </ReactTooltip>
    </>
  );
};

export default ExternalLinkWithTooltip;
