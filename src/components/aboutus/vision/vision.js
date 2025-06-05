import Image from "next/image";
import styles from "./vision.module.css";
import commonStyles from "../../../app/common.module.css";
import { ENUMS, ICONS } from "@/utils";

export const Vision = () => {
  return (
    <div style={{ position: "relative", marginTop: "26rem" }}>
      <div className={styles.visionContainer}>
        <div className={styles.rightContainer}>
          <Image src={ICONS.CONTAINER4} alt="continer" />
        </div>
        <div className={styles.leftContainer}>
          <p className={commonStyles.sectionName}>OUR VISION</p>
          <br />
          <h1>
            Focused on Service,<span> Driven by Purpose</span>
          </h1>
          <br />
          <p className={commonStyles.text}>
            To deliver reliable, efficient, and innovative transport solutions that exceed customer
            expectations, while upholding the highest standards of safety, professionalism, and integrity in
            every journey we take.
          </p>
          <br />
          <br />
          {ENUMS.MISSION.map((item, index) => (
            <div key={index} className={styles.visionItem}>
              <Image src={ICONS.TICK_ORANGE} alt="tick" />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
