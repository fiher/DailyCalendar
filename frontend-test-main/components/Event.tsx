import React from "react";
import styles from "./Event.module.css";

type EventProps = {
  title: string,
  start: number,
  end: number
}
const getStyle = (start: number, end: number) => {


  return {
    ["grid-row-start"]: start,
    ["grid-row-end"]: end
  } as React.CSSProperties
}

export const Event = ({title, start, end}: EventProps) => {
  let gridEnd = end;
  if(end - start < 15) {
    gridEnd = start + 15; // In order for the text to be readable we need at least 15 minutes
  }
  const startingHour = Math.floor(start / 60);
  const startingMinutes = start % 60;

  const endingHour = Math.floor(end / 60);
  const endingMinutes = end % 60;

  return (
    <div className={styles.event} style={{gridRowStart: start, gridRowEnd: gridEnd} as React.CSSProperties}>
      <p className={styles.title}>{title} - {startingHour}:{startingMinutes} - {endingHour}: {endingMinutes}</p>
    </div>
  );

}

