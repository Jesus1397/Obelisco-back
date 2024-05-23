import { NotFoundExceptionFilter } from './not-found.filter';

describe('NotFoundFilter', () => {
  it('should be defined', () => {
    expect(new NotFoundExceptionFilter()).toBeDefined();
  });
});
