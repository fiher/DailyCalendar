import React from "react";
import styles from "./Event.module.css";

type EventProps = {
  title: string,
  start: number,
  end: number
}

const addLeadingZero = (number: number) => number > 9 ? number : "0" + number;

const formatTime = (startHour: number, startMinutes: number, endHour: number, endMinutes: number) => {
  let displayStartHour = addLeadingZero(startHour);
  let displayStartMinutes = addLeadingZero(startMinutes);
  let displayEndHour =  addLeadingZero(endHour);
  let displayEndMinutes = addLeadingZero(endMinutes);

  return `${displayStartHour}:${displayStartMinutes} - ${displayEndHour}:${displayEndMinutes}`;
}

export const Event = ({title, start, end}: EventProps) => {
  let gridEnd = end;
  if (end - start < 15) {
    gridEnd = start + 15; // In order for the text to be readable we need at least 15 minutes
  }
  const startHour = Math.floor(start / 60);
  const startMinutes = start % 60;

  const endHour = Math.floor(end / 60);
  const endMinutes = end % 60;

  return (
    <div className={styles.event} style={{gridRowStart: start, gridRowEnd: gridEnd} as React.CSSProperties}>
      <p className={styles.title}>
        {title} {formatTime(startHour, startMinutes, endHour, endMinutes)}
      </p>
    </div>
  );

}

