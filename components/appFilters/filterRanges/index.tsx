/* eslint-disable react/require-default-props */
import { Handle, Range } from "rc-slider";
import styles from "./index.module.scss";
import "rc-slider/assets/index.css";

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
  const { value, index, ...restProps } = props;
  const valueAsString = `${value}`;
  return (
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <Handle key={index} value={value} {...(restProps as any)}>
      <span
        className="relative top-2"
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
  const { value, index, ...restProps } = props;
  const valueAsString = `${value}`;
  return (
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <Handle key={index} value={value} {...(restProps as any)}>
      <span
        className="relative top-2"
        style={{ left: `-${valueAsString.length / 4}ch` }}
      >
        {value}
      </span>
    </Handle>
  );
}
export default function FiltersRanges() {
  return (
    <div className="flex">
      <div className={`w-1/2 flex-col ${styles["range-container"]}`}>
        <span className="font-bold">Price Range</span>
        <Range
          max={1000000}
          defaultValue={[100000, 400000]}
          className="custom-range"
          handle={PriceRangeHandle}
        />
      </div>
      <div className={`w-1/2 flex-col ${styles["range-container"]}`}>
        <span className="font-bold">Square footage</span>
        <Range
          max={10000}
          defaultValue={[1000, 4000]}
          className="custom-range"
          handle={SquareRangeHandle}
        />
      </div>
    </div>
  );
}
