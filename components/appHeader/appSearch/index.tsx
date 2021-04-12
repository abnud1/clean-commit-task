import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EstatesState, search, setStatus } from "../../../store/estate";
import DropDownSelect from "../../dropdownSelect";
import styles from "./index.module.scss";

export default function AppSearch() {
  const statusFilter = useSelector(
    (state: EstatesState) => state.filters.status
  )!;
  const searchInputValue = useSelector(
    (state: EstatesState) => state.filters.search
  );
  const dispatch = useDispatch();
  const statusChange = (value: string | undefined) =>
    // @ts-expect-error
    dispatch(setStatus(value));
  const searchChange = (ev: ChangeEvent<HTMLInputElement>) =>
    dispatch(search(ev.target.value));
  return (
    <section className={styles["search-container"]}>
      <p className={`text-white font-bold ${styles.title}`}>
        Let us Guide You Home
      </p>
      <p className={`text-white ${styles.description}`}>
        Find the house of your dreams.
      </p>
      <div className={`bg-white rounded-md ${styles.search}`}>
        <DropDownSelect
          options={["For Rent", "For Sale", "Reserved"]}
          values={["for-rent", "for-sale", "reserved"]}
          value={statusFilter}
          onChange={statusChange}
        />
        <FontAwesomeIcon
          className={`text-blue ${styles["search-icon"]}`}
          icon={faSearch}
        />
        <input
          className={`focus:outline-none ${styles["search-input"]}`}
          placeholder="Search for properties or keywords.."
          type="search"
          value={searchInputValue}
          onChange={searchChange}
        />
      </div>
    </section>
  );
}
