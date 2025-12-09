import { FundStatistic } from "../FundStatistic/FundStatistic";
import { ProfileHeader, Description } from "../index";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={styles["container"]}>
      <ProfileHeader />
      <Description text="Create sustained impact. Support verified projects. Get regular updates. Save tax. Use web3." />
      <FundStatistic />
    </div>
  );
}
