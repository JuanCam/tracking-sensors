import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SensorsInfo } from '../SensorsInfo/SensorsInfo';

let comp = null;
const sensors = [];
const mockUpdateSensor = jest.fn(newInfo => {
  
  sensors.forEach((sensor) => {
    
    if (sensor.id === newInfo.id) {
      if(newInfo.command === 'connect') {
        sensor.connected = true;
        sensor.value = 13.4;
      } else {
        sensor.connected = false;
        sensor.value = null;
      }
    }
  });
});
jest.mock('../../components/Global/Global', () => {});
jest.mock('../../hooks', () => ({
  useSensors: () => ([
      sensors,
      mockUpdateSensor
  ])
}));
jest.mock('../../hooks/use-sensors/useSensors', () => ({
  useWebSocket: () => ({})
}));


function mountTree() {
  return render(<SensorsInfo />);
}

describe('Sensors Info component', () => {
  beforeEach(() => {
    sensors.length = 0;
    sensors.push({
      id: '1',
      name: 'Presure',
      connected: false,
      unit: 'kPa',
      value: null
    });
    comp = mountTree();
  });
  
  test('pushes properly a sensor', () => {
    expect(screen.queryAllByTestId('sensor_card').length).toBe(1);
    sensors.push({
      id: '2',
      name: 'Temperature',
      connected: false,
      unit: 'C',
      value: null
    });
    comp.rerender(<SensorsInfo />);
    expect(screen.queryAllByTestId('sensor_card').length).toBe(2);
  });

  test('connects properly a sensor', () => {
    const { getByText } = comp;
    fireEvent.click(getByText('Connect'));
    expect(mockUpdateSensor).toHaveBeenCalledWith({
      id: '1',
      command: 'connect'
    });
  });

  test('toggles properly a sensor', () => {
    const { getByText } = comp;
    fireEvent.click(getByText('Connect'));
    expect(mockUpdateSensor).toHaveBeenCalledWith({
      id: '1',
      command: 'connect'
    });
    comp.rerender(<SensorsInfo />);
    fireEvent.click(getByText('Disconnect'));
    expect(mockUpdateSensor).toHaveBeenCalledWith({
      id: '1',
      command: 'disconnect'
    });
  });
});
