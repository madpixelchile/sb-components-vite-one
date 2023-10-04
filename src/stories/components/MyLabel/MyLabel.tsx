

import './MyLabel.css';

interface Props {
  /**
    *Label string
  */
  label: string;
  /**
    *Label size
  */
  size?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4';
  /**
      *All caps
  */
  allCaps?: boolean;
  /**
      *Color
  */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary' | 'text-white';
  /**
      *Font Color
  */
  fontColor?: string;
  /**
      *Background color
  */
  bgColor?: 'bg-primary' | 'bg-secondary' | 'bg-tertiary' | 'transparent';

}

export const MyLabel = ({
  label,
  size = 'normal',
  color,
  allCaps,
  fontColor,
  bgColor,
}: Props) => {
  return (
    <span
      className={`label ${size} ${color} ${allCaps ? 'all-caps-on' : 'all-caps-off'} ${bgColor}`}
      style={fontColor ? { color: fontColor } : {}}>
      {label}
    </span>
  )
}

