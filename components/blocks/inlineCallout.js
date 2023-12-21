import Link from "next/link";
import classNames from "classnames";

import styles from "./inlineCallout.module.css";

const InlineCallout = ({ children, icon, color, bold, href }) => {
  const backgroundColor =
    color === "red-70"
      ? styles.GetStartedBackground
      : color === "violet-70"
      ? styles.LibraryBackground
      : color === "l-blue-70"
      ? styles.CloudBackground
      : styles.KBBackground;
  const textColor = (color = styles.GrayText); //Temporary color until red/Get started can be improved
  // color === "red-70"
  //   ? styles.GetStartedText
  //   : color === "violet-70"
  //   ? styles.LibraryText
  //   : color === "l-blue-70"
  //   ? styles.CloudText
  //   : styles.KBText;
  return (
    <section className={styles.Container}>
      <Link
        href={href}
        className={classNames(
          styles.IconContainer,
          backgroundColor,
          "not-link"
        )}
      >
        <i className={styles.Icon}>{icon}</i>
      </Link>
      <article>
        <p className={styles.Text}>
          <Link
            href={href}
            className={classNames("not-link", styles.Link, textColor)}
          >
            {bold}
          </Link>{" "}
          {children}
        </p>
      </article>
    </section>
  );
};

export default InlineCallout;
