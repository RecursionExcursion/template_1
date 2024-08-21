import styles from './SideBySide.module.css';

type SideBySideProps = {
  leftChild: React.ReactNode;
  rightChild: React.ReactNode;
};

export default function SideBySide(props:SideBySideProps) {

    const {leftChild, rightChild} = props;



  return (
    <div className={styles["parent-container"]}>
      {leftChild}
      {rightChild}
    </div>
  );
}
