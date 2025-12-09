import { Button } from "@/shared/ui/Button/Button";
import styles from "./FundStatistic.module.scss";
import { ProgressBar } from "@/shared/ui";

import { Avatar } from "@/shared/ui/Avatar/Avatar";
import Link from "next/link";

export const FundStatistic = ({}) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["raise"]}>
        <h1>
          <span>💎</span>
          <p> Total funds raised 583.93 TON</p>
        </h1>
        <ProgressBar value={30} color="#1D9Bf0" label={`${30.3}%`} />
        <span>First round goal 1,000.00 TON</span>
      </div>
      <div className={styles["wrapper-fund"]}>
        <div className={styles["fundation"]}>
          <div className={styles["info"]}>
            <Avatar src="/image.jpg" alt="User" size="small" />
            <div>
              <h2>Drop Points price:</h2>
              <p>0.01 TON</p>
            </div>
          </div>
          <Link className={styles["link-to"]} href="/drop">
            Buy
          </Link>
        </div>
        <h2 className={styles["stats"]}>
          <span>🔥</span>
          <p>148.32K members & 223.42 purchased</p>
        </h2>
      </div>
      <Button className={styles["button-drop"]} variant="primary">
        Get Drop points!
      </Button>
    </div>
  );
};
