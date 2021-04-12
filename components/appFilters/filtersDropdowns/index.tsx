import { useDispatch, useSelector } from "react-redux";
import {
  EstatesState,
  setBaths,
  setEstateBy,
  orderBy,
  setBeds,
} from "../../../store/estate";
import DropDownSelect from "../../dropdownSelect";
import styles from "./index.module.scss";

export default function FiltersDropdowns() {
  const filters = useSelector((state: EstatesState) => state.filters);
  const orderByCritaria = useSelector((state: EstatesState) => state.orderBy);
  const dispatch = useDispatch();
  const bathsChange = (value: string | undefined) => {
    if (value) {
      dispatch(setBaths(Number(value)));
    } else {
      dispatch(setBaths(undefined));
    }
  };
  const bedsChange = (value: string | undefined) => {
    if (value) {
      dispatch(setBeds(Number(value)));
    } else {
      dispatch(setBeds(undefined));
    }
  };
  const estateTypeChange = (value: string | undefined) => {
    // @ts-expect-error
    dispatch(setEstateBy(value));
  };
  const orderByChange = (value: string | undefined) => {
    // @ts-expect-error
    dispatch(orderBy(value));
  };
  return (
    <div className={`flex ${styles.filters}`}>
      <div className={`w-1/4 ${styles["filter-criteria"]}`}>
        <DropDownSelect
          wrapperClassName="w-full"
          options={["Bathes", "1", "2", "3"]}
          values={["", "1", "2", "3"]}
          value={`${filters.baths ?? ""}`}
          onChange={bathsChange}
          bordered
        />
      </div>
      <div className={`w-1/4 ${styles["filter-criteria"]}`}>
        <DropDownSelect
          wrapperClassName="w-full"
          options={["Beds", "1", "2", "3"]}
          values={["", "1", "2", "3"]}
          value={`${filters.beds ?? ""}`}
          onChange={bedsChange}
          bordered
        />
      </div>
      <div className={`w-1/4 ${styles["filter-criteria"]}`}>
        <DropDownSelect
          wrapperClassName="w-full"
          options={["Type of estate", "House", "Apartment"]}
          values={["", "House", "Apartment"]}
          value={`${filters.estateType ?? ""}`}
          onChange={estateTypeChange}
          bordered
        />
      </div>
      <div className={`w-1/4 ${styles["filter-criteria"]}`}>
        <DropDownSelect
          wrapperClassName="w-full"
          options={["Order by", "Price", "Size"]}
          values={["", "price", "size"]}
          value={`${orderByCritaria ?? ""}`}
          onChange={orderByChange}
          bordered
        />
      </div>
    </div>
  );
}
