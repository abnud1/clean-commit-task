/* eslint-disable react/require-default-props */
import { useDispatch, useSelector } from "react-redux";
import { Handle, Range } from "rc-slider";
import styles from "./index.module.scss";
import "rc-slider/assets/index.css";
import {
  EstatesState,
  setFootageRange,
  setPriceRange,
} from "../../../store/estate";

function PriceRangeHandle(props: {
  className: string;
  prefixCls?: string;
  vertical?: boolean;
  offset: number;
  value: number;
  dragging?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  reverse?: boolean;
  index: number;
  tabIndex?: number;
  ariaLabel: string;
  ariaLabelledBy: string;
  ariaValueTextFormatter: string;
  style?: React.CSSProperties;
  ref?: React.Ref<any>;
}) {
  // we don't use dragging but we do this so that we don't pass it to Handle
  // we do this so we don't see an error from react in console
  const { value, index, dragging, ...restProps } = props;
  const valueAsString = `${value}`;
  return (
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <Handle key={index} value={value} {...(restProps as any)}>
      <span
        className="relative top-4 text-blue"
        style={{ left: `-${valueAsString.length / 2}ch` }}
      >{`$${value}`}</span>
    </Handle>
  );
}

function SquareRangeHandle(props: {
  className: string;
  prefixCls?: string;
  vertical?: boolean;
  offset: number;
  value: number;
  dragging?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  reverse?: boolean;
  index: number;
  tabIndex?: number;
  ariaLabel: string;
  ariaLabelledBy: string;
  ariaValueTextFormatter: string;
  style?: React.CSSProperties;
  ref?: React.Ref<any>;
}) {
  // we don't use dragging but we do this so that we don't pass it to Handle
  // we do this so we don't see an error from react in console
  const { value, index, dragging, ...restProps } = props;
  const valueAsString = `${value}`;
  return (
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <Handle key={index} value={value} {...(restProps as any)}>
      <span
        className="relative top-4 text-blue"
        style={{ left: `-${valueAsString.length / 4}ch` }}
      >
        {value}
      </span>
    </Handle>
  );
}
export default function FiltersRanges() {
  const priceRange = useSelector(
    (state: EstatesState) => state.filters.priceRange
  );
  const footageRange = useSelector(
    (state: EstatesState) => state.filters.footageRange
  );
  const dispatch = useDispatch();
  const priceChange = (value: number[]) =>
    dispatch(setPriceRange([value[0], value[1]]));
  const footageChange = (value: number[]) =>
    dispatch(setFootageRange([value[0], value[1]]));

  return (
    <div className="flex">
      <div className={`w-1/2 flex-col ${styles["range-container"]}`}>
        <span className="font-bold">Price Range</span>
        <Range
          max={1000000}
          value={priceRange}
          onChange={priceChange}
          className="custom-range"
          handle={PriceRangeHandle}
        />
      </div>
      <div className={`w-1/2 flex-col ${styles["range-container"]}`}>
        <span className="font-bold">Square footage</span>
        <Range
          max={10000}
          value={footageRange}
          onChange={footageChange}
          className="custom-range"
          handle={SquareRangeHandle}
        />
      </div>
    </div>
  );
}
