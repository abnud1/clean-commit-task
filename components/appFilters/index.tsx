import FiltersRanges from "./filterRanges";
import FiltersDropdowns from "./filtersDropdowns";
import styles from "./index.module.scss";

export default function AppFilters() {
  return (
    <div className={`flex flex-col font-bold ${styles["filters-container"]}`}>
      <span className={styles["filters-span"]}>Filters</span>
      <FiltersDropdowns />
      <FiltersRanges />
    </div>
  );
}
