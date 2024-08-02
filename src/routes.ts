import { Router } from "express";
import { createClientController } from "./useCases/CreateClient";
import { getClientsController } from "./useCases/GetClients";
import { caixeiroViajanteController } from "./useCases/CaixeiroViajante";


const router = Router()

router.post('/client', (request, response) => {
  return createClientController.handle(request, response);
});

router.get('/clients', (request, response) => {
  return getClientsController.handle(request, response);
});

router.get('/caixeiro-viajante', (request, response) => {
  return caixeiroViajanteController.handle(request, response);
});

export { router }