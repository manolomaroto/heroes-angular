import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a message', () => {
    let message = 'Hola';

    service.add(message);
    expect(service.messages.length).toEqual(1);
  });

  it('should remove all messages', () => {
    let message1 = 'Hola';
    service.add(message1);
    expect(service.messages.length).toBeGreaterThan(0);
    service.clear();
    expect(service.messages.length).toEqual(0);
    
  })
});
