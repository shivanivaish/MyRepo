import { TestBed, inject } from '@angular/core/testing';

import { Github\githubService } from './github\github.service';

describe('Github\githubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Github\githubService]
    });
  });

  it('should be created', inject([Github\githubService], (service: Github\githubService) => {
    expect(service).toBeTruthy();
  }));
});
