// import Graph from '../components/Graph';

// const metroGraph = new Graph();

// metroGraph.addStation('PCMC');
// metroGraph.addStation('Sant Tukaram Nagar');
// metroGraph.addStation('Bhosari');
// metroGraph.addStation('Kasarwadi');
// metroGraph.addStation('Phugewadi');
// metroGraph.addStation('Dapodi');
// metroGraph.addStation('Bopodi');
// metroGraph.addStation('Khadki');
// metroGraph.addStation('Range Hills');
// metroGraph.addStation('Shivaji Nagar');




// metroGraph.addConnection('PCMC', 'Sant Tukaram Nagar', 10); 
// metroGraph.addConnection('PCMC', 'Bhosari', 10); 
// metroGraph.addConnection('Bhosari', 'Kasarwadi', 8);
// metroGraph.addConnection('Bhosari', 'Dapodi', 10);

// metroGraph.addConnection('PCMC', 'Sant Tukaram Nagar', { distance: 10, time: 5 });
// metroGraph.addConnection('PCMC', 'Bhosari', { distance: 10, time: 5 });
// metroGraph.addConnection('Bhosari', 'Kasarwadi', { distance: 8, time: 4 });
// metroGraph.addConnection('Bhosari', 'Dapodi', { distance: 10, time: 5 });



// export default metroGraph;


// import Graph from '../components/Graph';

// const metroGraph = new Graph();

// // Add stations and connections
// metroGraph.addStation('StationA');
// metroGraph.addStation('StationB');
// metroGraph.addStation('StationC');
// metroGraph.addConnection('StationA', 'StationB', 5);
// metroGraph.addConnection('StationB', 'StationC', 3);
// // ... add more stations and connections

// export default metroGraph;


import Graph from '../components/Graph';

const metroGraph = new Graph();

// Add stations
const stationNames = [
    'PCMC',
    'Sant Tukaram Nagar',
    'Bhosari',
    'kasarwadi',
    'Phugewadi',
    'Dapodi',
    'Bopodi',
    'Khadki',
    'Range Hills',
    'Shivaji nagar',
    'Civil court'
];

stationNames.forEach(station => metroGraph.addStation(station));

// Add predefined connections
// metroGraph.addConnection('PCMC', 'Sant Tukaram Nagar', 10);
// metroGraph.addConnection('PCMC', 'Bhosari', 10);
// metroGraph.addConnection('Bhosari', 'Kasarwadi', 8);
// metroGraph.addConnection('Bhosari', 'Dapodi', 10);

function getRandomValues() {
    return {
        distance: Math.floor(Math.random() * 20) + 2, 
        time: Math.floor(Math.random() * 10) + 2,     
    };
}

for (let i = 0; i < stationNames.length; i++) {
    for (let j = i + 1; j < stationNames.length; j++) {
        const connectionValues = getRandomValues();
        metroGraph.addConnection(stationNames[i], stationNames[j], connectionValues);
    }
}

export default metroGraph;
