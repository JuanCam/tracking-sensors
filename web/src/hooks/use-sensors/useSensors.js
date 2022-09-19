import { useState, useRef } from "react";
import { useWebSocket } from "../use-web-socket/useWebSocket";

export const useSensors = () => {
  const [sensors, setSensors] = useState({});
  const throttleLengths = useRef({});
  const ws = useWebSocket('ws://localhost:5000');
  const THROTTLE_SIZE = 3;

  ws.message(({ data }) => {
      const { id, connected } = data;

      if (throttleLengths.current[id] === undefined) {
        throttleLengths.current[id] = -1;
      }

      throttleLengths.current[id] = (throttleLengths.current[id] + 1) % THROTTLE_SIZE;
      
      setSensors((sensors) => {
        if (sensors[id]?.connected === connected && throttleLengths.current[id] !== 0) {
          return { ...sensors };
        }

        return {
          ...sensors,
          [id]: { ...data }
        };
      });
    });

  

  function updateSensor(payload) {
    ws.send(payload);
  }

  return [Object.values(sensors), updateSensor];
}