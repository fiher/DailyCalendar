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
          <div className={styles.timeMarker}>1 AM</div>
          <div className={styles.timeMarker}>2 AM</div>
          <div className={styles.timeMarker}>3 AM</div>
          <div className={styles.timeMarker}>4 AM</div>
          <div className={styles.timeMarker}>5 AM</div>
          <div className={styles.timeMarker}>6 AM</div>
          <div className={styles.timeMarker}>7 AM</div>
          <div className={styles.timeMarker}>8 AM</div>
          <div className={styles.timeMarker}>9 AM</div>
          <div className={styles.timeMarker}>11 AM</div>
          <div className={styles.timeMarker}>12 AM</div>
          <div className={styles.timeMarker}>1 PM</div>
          <div className={styles.timeMarker}>2 PM</div>
          <div className={styles.timeMarker}>3 PM</div>
          <div className={styles.timeMarker}>4 PM</div>
          <div className={styles.timeMarker}>5 PM</div>
          <div className={styles.timeMarker}>6 PM</div>
          <div className={styles.timeMarker}>7 PM</div>
          <div className={styles.timeMarker}>8 PM</div>
          <div className={styles.timeMarker}>9 PM</div>
          <div className={styles.timeMarker}>10 PM</div>
          <div className={styles.timeMarker}>11 PM</div>
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

