import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDown from "../../dropdown";
import styles from "./index.module.scss";

export default function AppSearch() {
  return (
    <section className={styles["search-container"]}>
      <p className={`text-white font-bold ${styles.title}`}>
        Let us Guide You Home
      </p>
      <p className={`text-white ${styles.description}`}>
        Find the house of your dreams.
      </p>
      <div className={`bg-white rounded-md ${styles.search}`}>
        <DropDown options={["For Rent", "For Sale"]} />
        <FontAwesomeIcon
          className={`text-blue ${styles["search-icon"]}`}
          icon={faSearch}
        />
        <input
          className={`focus:outline-none ${styles["search-input"]}`}
          placeholder="Search for properties or keywords.."
          type="search"
        />
      </div>
    </section>
  );
}
