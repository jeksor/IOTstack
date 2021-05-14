const espruinohub = () => {
  const retr = {};

  const serviceName = 'espruinohub';

  retr.getConfigOptions = () => {
    return {
      serviceName, // Required
      labeledPorts: {
        "1888:1888": 'http'
      },
      volumes: false,
      networks: false,
      logging: true
    }
  };

  retr.getHelp = () => {
    return {
      serviceName, // Required
      links: {
        "Website": '', // Website of service
        serviceDocs: '', // Official link to docs of service
        "Docker": 'https://hub.docker.com/u/amir20', // Docker of service
        "Source Code": 'https://github.com/amir20/dozzle', // Sourcecode of service
        community: '', // Community link
        communityChat: '', // Discord, gitter etc
        other: '', // Other links
        rawMarkdownRemote: '', // Usually links to github raw help pages.
        rawMarkdownLocal: '', // Relative path to docs locally
        "IOTstack Documentation for {$displayName}": 'https://sensorsiot.github.io/IOTstack/Containers/EspruinoHub/' // Usually links to the github page for this service.
      }
    };
  };

  retr.getCommands = () => {
    return {
      commands: {} // Key/value pair of helper commands user can run locally
    };
  };

  retr.getMeta = () => {
    return {
      serviceName, // Required
      displayName: 'EspruinoHub',
      serviceTypeTags: ['mqtt', 'ble', 'rpi only'],
      iconUri: '/logos/espruinohub.png'
    };
  };

  return retr;
};

module.exports = espruinohub;