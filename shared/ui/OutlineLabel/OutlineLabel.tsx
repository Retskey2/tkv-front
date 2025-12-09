import styles from "./OutlineLabel.module.scss";

export const OutlineLabel = ({
  text,
  label,
}: {
  text?: string;
  label: string;
}) => {
  return (
    <div className={styles["container"]}>
      <h1>{text ?? "26,031"}</h1>

      <div className={styles["wrapper"]}>
        <span>{label ?? "Points"}</span>
      </div>
    </div>
  );
};
