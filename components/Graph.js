
class MinHeap {
    constructor() {
        this.heap = [];
    }

    enqueue(element) {
        this.heap.push(element);
        this.heapifyUp();
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        const removedElement = this.heap[0];
        const lastElement = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastElement;
            this.heapifyDown();
        }

        return removedElement;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[currentIndex].distance < this.heap[parentIndex].distance) {
                [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let currentIndex = 0;

        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let smallestChildIndex = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].distance < this.heap[smallestChildIndex].distance) {
                smallestChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].distance < this.heap[smallestChildIndex].distance) {
                smallestChildIndex = rightChildIndex;
            }

            if (smallestChildIndex !== currentIndex) {
                [this.heap[currentIndex], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[currentIndex]];
                currentIndex = smallestChildIndex;
            } else {
                break;
            }
        }
    }
}

class Graph {
    constructor() {
        this.vertices = new Map();
    }

    addStation(station) {
        this.vertices.set(station, new Map());
    }

    addConnection(station1, station2, { distance, time }) {
        if (!this.vertices.has(station1)) {
            this.addStation(station1);
        }

        if (!this.vertices.has(station2)) {
            this.addStation(station2);
        }

        this.vertices.get(station1).set(station2, { distance, time });
        this.vertices.get(station2).set(station1, { distance, time });
    }

    dijkstra(startStation, endStation, journeyType) {
        const distances = new Map();
        const times = new Map();
        const visited = new Set();
        const minHeap = new MinHeap();

        for (const station of this.vertices.keys()) {
            distances.set(station, Infinity);
            times.set(station, Infinity);
        }
        distances.set(startStation, 0);
        times.set(startStation, 0);

        minHeap.enqueue({ station: startStation, distance: 0 });

        while (!minHeap.isEmpty()) {
            const { station, distance } = minHeap.dequeue();

            if (visited.has(station)) continue;

            visited.add(station);

            for (const [neighbor, { distance: weight, time }] of this.vertices.get(station)) {
                const newDistance = distance + weight;

                if (newDistance < distances.get(neighbor)) {
                    distances.set(neighbor, newDistance);
                    times.set(neighbor, time);
                    minHeap.enqueue({ station: neighbor, distance: newDistance });
                }
            }
        }

        const result = {
            distance: distances.get(endStation),
            time: times.get(endStation),
            fare: 0,
        };

        if (result.distance !== Infinity && result.time !== Infinity) {
            const baseFarePerKm = 1; // Adjust this value based on your fare per kilometer
            const baseFare = 0; // Adjust this value based on your base fare
            const timeFarePerMinute = 0; // Adjust this value based on your fare per minute

            const distanceFare = baseFare + baseFarePerKm * result.distance;
            const timeFare = timeFarePerMinute * result.time;
            result.fare = journeyType === 'return' ? distanceFare * 2 + timeFare : distanceFare + timeFare;
            // result.fare = journeyType === 'return' ? distanceFare * 1 + timeFare : distanceFare + timeFare;
        }

        return result;
    }
}

export default Graph;

