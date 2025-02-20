'use client';
import { useEffect, useMemo, useState } from 'react';
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';

export const cloudProps = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 'auto',
      paddingTop: 0,
      backgroundColor: '#171717', 
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#171717',
    maxSpeed: 0.03,
    minSpeed: 0.01,
    dragControl: false,
  },
};

export const renderCustomIcon = (icon) => {
  return renderSimpleIcon({
    icon,
    bgHex: '#f3f2ef',
    fallbackHex: '#ffffff',
    minContrastRatio: 100,
    size: 70,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export default function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) => renderCustomIcon(icon));
  }, [data]);

  return (
    <Cloud {...cloudProps}>{renderedIcons}</Cloud>
  );
}
