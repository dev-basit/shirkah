import styles from "./companies.module.css";

export const Companies = () => {
  return (
    <div className={styles.companiesContainer}>
      <h2>
        <pre>Trusted by more</pre>
        <pre>
          than <span> 4000</span> companies
        </pre>
      </h2>
    </div>
  );
};
