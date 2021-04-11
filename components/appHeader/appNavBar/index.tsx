import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import AppNavItem from "./appNavItem";
import styles from "./index.module.scss";

export default function AppNavBar() {
  return (
    <nav className={`flex ${styles.nav}`}>
      <Image src="/images/logo.png" width={161} height={42} layout="fixed" />
      <ul className={`flex ${styles["nav-list"]}`}>
        <AppNavItem>Homepage</AppNavItem>
        <AppNavItem>About Us</AppNavItem>
        <AppNavItem>For Rent</AppNavItem>
        <AppNavItem>For Sale</AppNavItem>
        <AppNavItem>Our Agents</AppNavItem>
        <AppNavItem>Contact Us</AppNavItem>
      </ul>
      <div className={`flex ${styles["nav-icons"]}`}>
        <FontAwesomeIcon
          className={`text-white ${styles["exchange-icon"]}`}
          icon={faExchangeAlt}
        />
        <FontAwesomeIcon className="text-white" icon={faHeart} />
      </div>
    </nav>
  );
}
