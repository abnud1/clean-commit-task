import Image from "next/image";
import { useSelector } from "react-redux";
import { EstatesState } from "../../store/estate";
import styles from "./index.module.scss";

export default function SelectedEstate() {
  const selectedEstate = useSelector(
    (state: EstatesState) => state.selectedEstate
  );
  if (!selectedEstate) return null;
  return (
    <section className={`relative ${styles["selected-estate"]}`}>
      <Image src={selectedEstate.image} layout="fill" objectFit="cover" />
      <div
        className={`flex flex-col bg-white ${styles["selected-estate-info"]}`}
      >
        <button
          type="button"
          className={`text-white bg-gold ${styles["status-btn"]}`}
        >
          {selectedEstate.status.toUpperCase()}
        </button>
        <div className={styles.title}>{selectedEstate.title}</div>
        <div className={`text-blue ${styles.price}`}>
          ${selectedEstate.price}
        </div>
        <div className={`text-gray ${styles.address}`}>
          {selectedEstate.address}
        </div>
        <div className={`flex ${styles.rooms}`}>
          <span className="flex">
            <Image
              src="/icons/bed-icon.svg"
              width={30}
              height={30}
              layout="fixed"
            />
            <div className={`text-gray ${styles["rooms-info"]}`}>
              {selectedEstate.beds} Beds
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
              {selectedEstate.baths} Baths
            </div>
          </span>
          <span className={`flex ${styles["size-info"]}`}>
            <Image
              src="/icons/size-icon.svg"
              width={30}
              height={30}
              layout="fixed"
            />
            <div className="text-gray">{selectedEstate.size} SqFt</div>
          </span>
        </div>
      </div>
    </section>
  );
}
