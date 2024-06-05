import styles from "./TransactionCard.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import {
  PiPizza,
  PiGift,
  PiShoppingBag,
  PiWallet,
  PiBasket,
} from "react-icons/pi";
import { MdOutlineModeEdit } from "react-icons/md";
import { BsSuitcase2 } from "react-icons/bs";

export default function ExTrTransactionCard({ details, handleDelete, handleEdit }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardIcon}>
          {details.category == "food" && <PiPizza />}
          {details.category == "entertainment" && <PiGift />}
          {details.category == "travel" && <BsSuitcase2 />}
          {details.category == "shopping" && <PiShoppingBag />}
          {details.category == "groceries" && <PiBasket />}
          {details.category == "others" && <PiWallet />}
        </div>
        <div className={styles.cardInfo}>
          <h5>{details.title}</h5>
          <p>{details.date}</p>
        </div>
      </div>

      <div className={styles.cardInner}>
        <p className={styles.cardPrice}>{`₹${details.price}`}</p>
        <div className={styles.cardButtonWrapper}>
          <button className={styles.cardDelete} onClick={handleDelete}>
            <IoMdCloseCircleOutline />
          </button>
          <button className={styles.cardEdit} onClick={handleEdit}>
            <MdOutlineModeEdit />
          </button>
        </div>
      </div>
    </div>
  );
}
