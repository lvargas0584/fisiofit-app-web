import React from 'react';
import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events.js";
import { es } from 'date-fns/locale'



function SchedulerCustom() {

  return (
    <Scheduler
    events={EVENTS}
    locale={es}
  />
  );
}

export default SchedulerCustom;