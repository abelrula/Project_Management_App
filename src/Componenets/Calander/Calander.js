import React from 'react'
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar as BigCalander, momentLocalizer } from "react-big-calendar";
const Calander = (props) => {
  const localizer = momentLocalizer(moment);
  const events = [
    {
      start: moment("2023-12-15T10:00:00").toDate(),
      end: moment("2023-12-15T11:00:00").toDate(),
      title: "going to te gym",
    },
  ];
  const component = {
    event: (prop) => {
      console.log(prop);
      return null;
    },
  };
  return (
    <div>
      <BigCalander
        defaultView="week"
        events={events}
        localizer={localizer}
        components={component}
      />
    </div>
  );
};

export default Calander

 