import { useSelector } from "react-redux";
import { EstatesState, filteredEstates } from "../../store/estate";
import EstateViewer from "../estateViewer";
import styles from "./index.module.scss";

export default function AppContent() {
  const estates = useSelector((state: EstatesState) => filteredEstates(state));
  return (
    <main className={`flex flex-col padded ${styles.main}`}>
      <div className={`flex flex-wrap ${styles["estates-viewer"]}`}>
        {estates.map((v) => (
          <EstateViewer
            className={styles["estate-viewer"]}
            key={v.id}
            estate={v}
          />
        ))}
      </div>
      <button
        type="button"
        className={`bg-blue rounded-full mx-auto text-white ${styles["show-more-btn"]}`}
      >
        Show More
      </button>
    </main>
  );
}
