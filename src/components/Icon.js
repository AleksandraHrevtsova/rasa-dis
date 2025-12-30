import svg from '../images/sprite.svg';

export const Icon = (props) => {
  const { name, className, color, stroke, width, height } = props;
  return (
    <svg
      className={`icon icon-${name} ${className} `}
      fill={color}
      stroke={stroke}
      width={width}
      height={height}
    >
      <use xlinkHref={`${svg}#${name}`}></use>
      <img src='./sprite.svg#id-icon' alt={`icon-${name}`} />
    </svg>
  );
}