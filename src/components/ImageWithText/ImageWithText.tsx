interface ImageWithTextProps {
  imageClass?: string;
  imageSrc: string;
  imageContainerClass?: string;
  text?: string;
  textClass?: string;
  textTitle?: string;
  textTitleClass?: string;
  className?: string;
  position: boolean;
  section: string;
}

const ImageWithText: React.FunctionComponent<ImageWithTextProps> = ({
  imageClass,
  imageSrc,
  imageContainerClass,
  textClass,
  text,
  textTitle,
  textTitleClass,
  className,
  position,
  section,
}) => {
  if (position == true) {
    return (
      <div id={section} className={className}>
        <div className={imageContainerClass}>
          <img className={imageClass} src={imageSrc}></img>
        </div>
        <div>
          <h3 className={textTitleClass}>{textTitle}</h3>
          <div className={textClass}>{text}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div id={section} className={className}>
        <div className={textClass}>
          <h3 className={textTitleClass}>{textTitle}</h3>
          <div>{text}</div>
        </div>
        <div className={imageContainerClass}>
          <img className={imageClass} src={imageSrc}></img>
        </div>
      </div>
    );
  }
};

export default ImageWithText;
