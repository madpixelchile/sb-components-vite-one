

import './MyLabel.css';

interface Props {
  /**
    *Label string
  */
  label: string;
  /**
    *Label size
  */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
      *All caps
  */
  allCaps?: boolean;
  /**
      *Color
  */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
  /**
      *Font Color
  */
  fontColor?: string;

}

export const MyLabel = ({
  label,
  size = 'normal',
  color,
  allCaps,
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} ${color} ${allCaps ? 'all-caps-on' : 'all-caps-off'}`}
      style={fontColor ? { color: fontColor } : {}}>
      {label}
    </span>
  )
}

