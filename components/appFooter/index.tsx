import Image from "next/image";
import styles from "./index.module.scss";

export default function AppFooter() {
  return (
    <footer className={styles.footer}>
      <Image src="/images/logo1.png" width={161} height={42} layout="fixed" />
    </footer>
  );
}
