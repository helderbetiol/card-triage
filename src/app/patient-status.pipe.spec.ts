import { PatientStatusNotDonePipe } from './patient-status.pipe';

describe('PatientStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new PatientStatusNotDonePipe();
    expect(pipe).toBeTruthy();
  });
});

