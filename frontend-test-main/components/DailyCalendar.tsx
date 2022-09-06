import React from "react";
import styles from "./DailyCalendar.module.css";
import {Event} from "./Event";


type DailyCalendarProps = {
  events: {
    title: string,
    start: number,
    end: number
  }[]
}

export const DailyCalendar = ({events}: DailyCalendarProps) => {
  return (
    <div>
      <h1 className={styles.header}>Today</h1>
      <div className={styles.calendar}>
        <div className={styles.timeline}>
          <div className={styles.timeMarker}></div>
          <div className={styles.timeMarker}>1:00</div>
          <div className={styles.timeMarker}>2:00</div>
          <div className={styles.timeMarker}>3:00</div>
          <div className={styles.timeMarker}>4:00</div>
          <div className={styles.timeMarker}>5:00</div>
          <div className={styles.timeMarker}>6:00</div>
          <div className={styles.timeMarker}>7:00</div>
          <div className={styles.timeMarker}>8:00</div>
          <div className={styles.timeMarker}>9:00</div>
          <div className={styles.timeMarker}>11:00</div>
          <div className={styles.timeMarker}>12:00</div>
          <div className={styles.timeMarker}>13:00</div>
          <div className={styles.timeMarker}>14:00</div>
          <div className={styles.timeMarker}>15:00</div>
          <div className={styles.timeMarker}>16:00</div>
          <div className={styles.timeMarker}>17:00</div>
          <div className={styles.timeMarker}>18:00</div>
          <div className={styles.timeMarker}>19:00</div>
          <div className={styles.timeMarker}>20:00</div>
          <div className={styles.timeMarker}>21:00</div>
          <div className={styles.timeMarker}>22:00</div>
          <div className={styles.timeMarker}>23:00</div>
          <div className={styles.timeMarker}></div>
        </div>
        <div className={styles.eventsGrid}>
          <div>
            {Array.from(Array(24).keys()).map((iterator) => (<div className={styles.separator} key={iterator}></div>))}
          </div>
          <div className={styles.eventsContainer}>
            <div className={styles.events}>
              {events.map(({title, start, end}) => (
                <Event title={title} start={start} end={end}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

