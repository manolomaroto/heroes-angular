import { of } from 'rxjs';

export class ActivatedRouteStub {
  private paramsSubject = of({ id: '123' });

  snapshot = {
    paramMap: {
      get: (key: string) => '123' // Simula el ID de la ruta
    }
  };

  get paramMap() {
    return this.paramsSubject;
  }
}
