import { useState } from "react";
import styles from "./styles/desktop.module.css";

import { Icon } from "../icon/Icon";

export const Desktop = () => {
  return (
    <div 
      className={styles.container}
    >
      <Icon 
        name="test" iconUrl="/assets/imgs/apple-outlined.png"
      />
    </div>
  )
}

