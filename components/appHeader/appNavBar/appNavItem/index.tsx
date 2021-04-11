import { PropsWithChildren } from "react";

export default function AppNavItem(props: PropsWithChildren<{}>) {
  const { children } = props;
  return <li className="text-white whitespace-nowrap">{children}</li>;
}
