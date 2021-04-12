import Image from "next/image";
import { useDispatch } from "react-redux";
import { Estate, selectEstate } from "../../store/estate";
import styles from "./index.module.scss";

interface EstateViewerProps {
  estate: Estate;
  className?: string;
}
function EstateViewer(props: EstateViewerProps) {
  const { estate, className } = props;
  const dispatch = useDispatch();
  const onClick = () => dispatch(selectEstate(estate));
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
    <div
      className={`flex flex-col ${className ?? ""} ${styles["estate-viewer"]}`}
      onClick={onClick}
    >
      <Image src={estate.image} width={350} height={250} layout="fixed" />
      <div className={`text-gray ${styles.title}`}>{estate.title}</div>
      <div className={`text-blue ${styles.price}`}>${estate.price}</div>
      <div className={`text-gray ${styles.address}`}>{estate.address}</div>
      <div className={`flex ${styles.rooms}`}>
        <span className="flex">
          <Image
            src="/icons/bed-icon.svg"
            width={30}
            height={30}
            layout="fixed"
          />
          <div className={`text-gray ${styles["rooms-info"]}`}>
            {estate.beds} Beds
          </div>
        </span>
        <span className={`flex ${styles["bath-info"]}`}>
          <Image
            src="/icons/bath-icon.svg"
            width={30}
            height={30}
            layout="fixed"
          />
          <div className={`text-gray ${styles["rooms-info"]}`}>
            {estate.baths} Baths
          </div>
        </span>
        <span className={`flex ${styles["size-info"]}`}>
          <Image
            src="/icons/size-icon.svg"
            width={30}
            height={30}
            layout="fixed"
          />
          <div className={`text-gray ${styles["rooms-info"]}`}>
            {estate.size} SqFt
          </div>
        </span>
      </div>
    </div>
  );
}
EstateViewer.defaultProps = {
  className: "",
};
export default EstateViewer;
