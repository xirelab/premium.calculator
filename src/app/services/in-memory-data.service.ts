import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const occupations = [
            { id: 1, name: "Cleaner", rating: "Light Manual" },
            { id: 2, name: "Doctor", rating: "Professional" },
            { id: 3, name: "Author", rating: "White Collar" },
            { id: 4, name: "Farmer", rating: "Heavy Manual" },
            { id: 5, name: "Mechanic", rating: "Heavy Manual" },
            { id: 6, name: "Florist", rating: "Light Manual" }
        ];
        return {occupations};
    }    
}