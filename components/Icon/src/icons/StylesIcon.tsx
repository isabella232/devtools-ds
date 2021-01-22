/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * StylesIcon
 *
 * @param iconProps - SVG props
 */
const StylesIcon = (iconProps: IconProps) => {
  const { className, fill, size, inline, ...html } = iconProps;
  const iconSize = size ? IconSizes[size] : undefined;

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="2 2 20 20"
      className={makeClass(className, { [styles.inline]: inline })}
      width={iconSize}
      height={iconSize}
      fill={fill || "currentColor"}
      {...html}
    >
      <path d="M9 3a1 1 0 110 2h-.067c-1.017 0-1.559.756-1.597 2.763L7.333 8c0 1.79-.468 3.153-1.38 4 .859.798 1.324 2.052 1.375 3.689l.008.548c.037 1.926.538 2.7 1.478 2.76l.12.003H9a1 1 0 01.117 1.993L9 21l-.284-.005c-2.282-.102-3.444-1.829-3.513-4.72l-.006-.502c-.044-1.924-.667-2.714-1.976-2.77L3.067 13H2v-2h1.067c1.414 0 2.084-.775 2.13-2.773L5.2 8c0-3.056 1.162-4.89 3.516-4.995L9 3zm6 0l.284.005c2.282.102 3.444 1.829 3.513 4.72l.006.502c.044 1.924.667 2.714 1.976 2.77l.154.003H22v2h-1.067l-.154.003c-1.256.054-1.881.784-1.968 2.544l-.008.226-.006.501c-.066 2.802-1.16 4.51-3.302 4.707l-.211.014L15 21l-.117-.007a1 1 0 010-1.986L15 19h.067l.12-.004c.9-.056 1.398-.77 1.47-2.524l.007-.235.008-.548c.051-1.637.516-2.891 1.375-3.689-.859-.798-1.324-2.052-1.375-3.689l-.008-.548c-.037-1.926-.538-2.7-1.478-2.76L15 5a1 1 0 01-.117-1.993L15 3z" />
    </svg>
  );
};

export default StylesIcon;
