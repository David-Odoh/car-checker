import Image from "next/image";
import logo from "../../public/images/icons/logo.png";
import styles from "../../styles/components/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.copyright}>
          <p>© 2018 Electro Store. All rights reserved | Design by W3layouts.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
