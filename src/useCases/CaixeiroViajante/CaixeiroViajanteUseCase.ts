import { IClientsRepository } from "../../repositories/IClientsRepository"
import { Client } from "../../entities/Client"

export class CaixeiroViajanteUseCase {
  constructor(
    private clientsRepository: IClientsRepository,
  ) {}

  async execute() {
    const clients = await this.clientsRepository.getClients()

    // cria um array de diversos array com todas combinações possiveis
    const permute = (arr: Client[]): Client[][] => {
        let result: Client[][] = []
        if (arr.length === 0) return [[]]
        for (let i = 0 ; i < arr.length ;i++) {
            const current = arr[i]
            const remaining = arr.slice(0, i).concat(arr.slice(i + 1))
            const remainingPerms = permute(remaining)
            for (let perm of remainingPerms) {
                result.push([current].concat(perm))
            }
        }
        return result
    }
    
    // calcula a distancia entre dois pontos
    const distance = (point1: Client, point2: Client): number => {
        const dx = point1.coordinates_x - point2.coordinates_x
        const dy = point1.coordinates_y - point2.coordinates_y
        return Math.sqrt(dx * dx + dy * dy)
    }
    
    // calcula toda a distancia "percorida"
    const totalDistance = (route: Client[]): number => {
        let total = 0
        for (let i = 0; i < route.length - 1; i++) {
            total += distance(route[i], route[i + 1])
        }

        total += distance(route[route.length - 1], route[0])
        return total
    }
    
    // calcula a menor distancia utilizando das outras funções
    const findShortestRoute = (clients: Client[]): { route: Client[], distance: number } => {
        const startingPoint: Client = {
            id: "1",
            name: "Company",
            email: "",
            phone: "",
            coordinates_x: 0,
            coordinates_y: 0
        }
        const allPermutations = permute(clients)
        let shortestDistance = Infinity
        let shortestRoute: Client[] = []
    
        for (let perm of allPermutations) {
            const route = [startingPoint, ...perm, startingPoint]
            const routeDistance = totalDistance(route)
            if (routeDistance < shortestDistance) {
                shortestDistance = routeDistance
                shortestRoute = route
            }
        }
    
        return { route: shortestRoute, distance: shortestDistance }
    }

      
    let result = findShortestRoute(clients)

    result.route = result.route.filter((route) => route.name !== 'Company')

    return {'shortestRoute': result.route, "shortestDistance": result.distance}
  }
}