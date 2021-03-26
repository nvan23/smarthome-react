const data = [
  {
    id: 'living',
    roomName: 'Living',
    devices: {
      lights: [
        {
          id: 'lightnumber1',
          name: "Light number 1",
          active: true,
        },
        {
          id: 'lightnumber2',
          name: "Light number 2",
          active: false,
        },
      ],
      eFans: [
        {
          id: 'ePan1',
          name: "Electric Fan 1",
          active: false,
        },
        {
          id: 'eFans2',
          name: "Electric Fan 2",
          active: true,
        }
      ],

    },
    sensors: {
      temperatures: [
        {
          id: 'temperature1',
          values: [23, 26, 29],
        },
      ],
      humidities: [
        {
          id: 'humidity1',
          values: [80, 65, 70],
        }
      ]
    },
  },
  {
    id: 'bedroom',
    roomName: 'Bedroom',
    devices: {
      lights: [
        {
          id: 'lightnumber3',
          name: "Light number 3",
          active: true,
        },
        {
          id: 'lightnumber4',
          name: "Light number 4",
          active: false,
        },
      ],
      eFans: [
        {
          id: 'ePan3',
          name: "Electric Fan 3",
          active: false,
        },
        {
          id: 'eFans4',
          name: "Electric Fan 4",
          active: false,
        }
      ],

    },
    sensors: {
      temperatures: [
        {
          id: 'temperature1',
          values: [23, 26, 29],
        },
      ],
      humidities: [
        {
          id: 'humidity1',
          values: [80, 65, 70],
        }
      ]
    },
  },
  {
    id: 'kitchen',
    roomName: 'Kitchen',
    devices: {
      lights: [
        {
          id: 'lightnumber5',
          name: "Light number 5",
          active: true,
        },
        {
          id: 'lightnumber6',
          name: "Light number 6",
          active: true,
        },
      ],
      eFans: [
        {
          id: 'ePan5',
          name: "Electric Fan 5",
          active: false,
        },
        {
          id: 'eFans6',
          name: "Electric Fan 6",
          active: true,
        }
      ],

    },
    sensors: {
      temperatures: [
        {
          id: 'temperature1',
          values: [23, 26, 29],
        },
      ],
      humidities: [
        {
          id: 'humidity1',
          values: [80, 65, 70],
        }
      ]
    },
  }
];


export default data;