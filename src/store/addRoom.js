const handleAddRoom = (values) => {
  let newLights = [];
  newLights.push({
    id: values.lightName.trim().split(' ').join('').toLowerCase(),
    name: values.lightPath.trim(),
    active: false,
  });

  let newEFans = [];
  newEFans.push({
    id: values.eFanName.trim().split(' ').join('').toLowerCase(),
    name: values.eFanPath.trim(),
    active: false,
  });

  let newTemperatures = [];
  newTemperatures.push({
    id: values.temperaturePath,
    values: [],
  });

  let newHumidities = [];
  newHumidities.push({
    id: values.humidityPath,
    values: [],
  });

  let newRoom = {
    id: values.roomName.trim().split(' ').join('').toLowerCase(),
    roomName: values.roomName.trim(),
    devices: {
      lights: newLights,
      eFans: newEFans,
    },
    sensors: {
      temperatures: newTemperatures,
      humidities: newHumidities,
    },
  };

  return newRoom;
};

export default handleAddRoom;