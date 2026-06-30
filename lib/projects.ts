export type Project = {
  title: string
  slug: string
  summary: string
  image: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'Addressable High-Power RGB LEDs',
    slug: 'rgb-leds',
    summary: 'A hardware experiment scaling addressable LED behavior to higher-power RGB lighting with MOSFET control.',
    image: '/images/ledstrip.jpg',
    tags: ['Embedded', 'PWM', 'Hardware']
  },
  {
    title: 'Front-End Development Experiments',
    slug: 'web-development',
    summary: 'Earlier web work that marked the transition from simple interfaces into dynamic frontend systems.',
    image: '/images/frontend.jpg',
    tags: ['Frontend', 'AngularJS', 'PHP']
  },
  {
    title: 'IoT Remote Power Switch',
    slug: 'iot-power-switch',
    summary: 'A small ESP8266-powered control surface for switching household power from networked devices.',
    image: '/images/iot.jpg',
    tags: ['IoT', 'ESP8266', 'Automation']
  },
  {
    title: 'Call Log Management Center',
    slug: 'call-log-management',
    summary: 'A PHP and MySQL web application built to replace a slow Microsoft Access workflow for a local business.',
    image: '/images/phpsql.png',
    tags: ['PHP', 'MySQL', 'Validation']
  },
  {
    title: 'SLAM Drone Senior Project',
    slug: 'slam-drone',
    summary: 'A senior engineering project exploring autonomous navigation, mapping, and machine vision concepts.',
    image: '/images/slam.jpg',
    tags: ['Robotics', 'Vision', 'Navigation']
  },
  {
    title: 'Wild West Shootout Game',
    slug: 'wild-west-shootout',
    summary: 'A PIC microcontroller and addressable LED game built in assembly as an early embedded systems project.',
    image: '/images/microchip.jpg',
    tags: ['PIC', 'Assembly', 'LEDs']
  },
  {
    title: 'DC Isolated Bluetooth Audio Adapter',
    slug: 'bluetooth-audio',
    summary: 'A practical car audio upgrade that solved a ground-loop problem with an isolated relay and battery system.',
    image: '/images/bluetooth.jpg',
    tags: ['Electronics', 'Audio', 'Troubleshooting']
  }
]
