import React from "react";
import {
  SensorCard,
  Grid,
  GridItem,
  SensorCardBody,
  SensorCardFooter,
  Button, 
  Heading} from "../../components";
import { useSensors } from "../../hooks";


export const SensorsInfo = () => {
  const [sensors, updateSensor] = useSensors();
  let cols = 1;

  return <>
  <Heading>
    <h1>Sensors Management</h1>
  </Heading>
  <Grid colGutter="20px" rowGutter="20px">
    {sensors.map((sensor) => {
      const { id, connected } = sensor;
      const item = <GridItem
        key={id}
        start={cols}
        span={4}>
        <SensorCard connected={sensor.connected}>
          <SensorCardBody>
            <h2>{sensor.name}</h2>
            <p>{sensor.value ? `Value: ${sensor.value} ${sensor.unit}` : `Connect to view ${sensor.name.toLowerCase()} value`}</p>
          </SensorCardBody>
          <SensorCardFooter>
            <Button theme={sensor.connected ? 'danger' : 'success'} onClick={() => {
              updateSensor({ command: connected ? 'disconnect' : 'connect', id })
            }}>{connected ? 'Disconnect' : 'Connect'}</Button>
          </SensorCardFooter>
        </SensorCard>
      </GridItem>;

      cols = (cols + 4) % 12;

      return item;
      })}
    </Grid>
  </>;
};