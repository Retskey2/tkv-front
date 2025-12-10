import styles from './OutlineLabel.module.scss';

export const OutlineLabel = ({
  text = '-',
  label = 'Points',
}: {
  text?: string;
  label?: string;
}) => {
  return (
    <div className={styles['container']}>
      <h1>{text}</h1>

      <div className={styles['wrapper']}>
        <span>{label}</span>
      </div>
    </div>
  );
};
