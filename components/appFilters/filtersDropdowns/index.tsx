import DropDown from "../../dropdown";
import styles from "./index.module.scss";

export default function FiltersDropdowns() {
  return (
    <div className={`flex ${styles.filters}`}>
      <div className={`w-1/4 ${styles["filter-criteria"]}`}>
        <DropDown
          wrapperClassName="w-full"
          options={["Bathes", "1", "2", "3"]}
          bordered
        />
      </div>
      <div className={`w-1/4 ${styles["filter-criteria"]}`}>
        <DropDown
          wrapperClassName="w-full"
          options={["Beds", "1", "2", "3"]}
          bordered
        />
      </div>
      <div className={`w-1/4 ${styles["filter-criteria"]}`}>
        <DropDown
          wrapperClassName="w-full"
          options={["Type of estate", "1", "2", "3"]}
          bordered
        />
      </div>
      <div className={`w-1/4 ${styles["filter-criteria"]}`}>
        <DropDown
          wrapperClassName="w-full"
          options={["Order by", "1", "2", "3"]}
          bordered
        />
      </div>
    </div>
  );
}
