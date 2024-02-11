import { TestBed } from '@angular/core/testing';
import { USERS } from './mock-data/users';

import { DataService } from './data.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users function', () => {
    service.getAllUsers().subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(4);
      const secUser = users.find((user: any) => user.id === 2);
      expect(secUser.name).toBe('dsacsd');
    });
    const mockReq = testingController.expectOne('api/users');
    mockReq.flush(Object.values(USERS));
  });
});
