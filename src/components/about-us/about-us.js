import Image from "next/image";
import styles from "./about-us.module.css";
import commonStyles from "../../app/common.module.css";
import { ENUMS, ICONS } from "@/utils";

export const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.leftContainer}>
        <p className={commonStyles.sectionName}>ABOUT US</p>
        <h1>
          Partners In Your <span>Success</span>
        </h1>
        <br />
        <p className={commonStyles.text}>
          Lorem ipsum dolor sit amet consectetur. Congue nunc molestie accumsan ipsum odio eu eget cras. Massa
          sit risus quam magna et laoreet ullamcorper massa.
        </p>
        <br />
        <br />
        {Array.from({ length: 4 }).map((item, index) => (
          <div key={index} className={styles.aboutUsItem}>
            <Image src={ICONS.TICK_ORANGE} alt="tick" />
            <p style={{ marginLeft: "1rem", fontSize: "1.6rem", fontWeight: "500" }}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        ))}
      </div>
      <div className={styles.centerContainer}></div>
      <div className={styles.rightContainer}></div>

      {/* <div className={styles.aboutUsTypesContainer}>
        {ENUMS.SERVICES.map((aboutUs) => (
          <div className={styles.aboutUsType} key={aboutUs.name}>
            <div className={styles.aboutUsIcon}>
              <Image
                width={30}
                height={30}
                src={aboutUs.icon}
                alt="aboutUs"
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
              />
            </div>
            <p className={styles.aboutUsCategoryName}>{aboutUs.name}</p>
            <p className={styles.aboutUsCategoryDescription}>
              Lorem ipsum dolor sit amet consectetur. Ut sit integer maecenas eu.
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};
