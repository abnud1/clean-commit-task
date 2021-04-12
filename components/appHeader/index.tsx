import styles from "./index.module.scss";
import AppNavBar from "./appNavBar";
import AppSearch from "./appSearch";

export default function AppHeader() {
  return (
    <>
      <svg height="0" width="0">
        <defs>
          <clipPath id="header-rectangle" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 H1 L 0.65 0.95 Q 0.631578947367 1,0.6 1 H0 Z" />
          </clipPath>
          <clipPath id="overlay-rectangle" clipPathUnits="objectBoundingBox">
            <path d="M 0 0.33 V1 H1 V0 H0.11 Q 0.09 0,0.0525 0.16 Z" />
          </clipPath>
        </defs>
      </svg>
      <header className={`bg-blue padded ${styles.header}`}>
        <AppNavBar />
        <AppSearch />
        <div className={`absolute w-full -z-1 ${styles.overlay}`} />
      </header>
    </>
  );
}
