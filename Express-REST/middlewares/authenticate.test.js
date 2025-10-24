import { expect, test, vi } from "vitest";
import authenticate from "./authenticate";

test('res status is 401 when no token provided', async () => {
  // Pattern dans les tests qui s'appelle AAA
  // Arrange / Act / Assert

  // Arrange (preparer les données)
  const req = {
    headers: {}
  };
  const res = {
    json: vi.fn(),
  };
  const next = () => {};


  // console.log('before', res.json.mock.calls);

  // Act (exécuter la fonction à tester)
  authenticate(req, res, next);

  // console.log('after', res.json.mock.calls);

  // Assert (vérifier les résultats)
  expect(res.statusCode).toBe(401);
  expect(res.json).toHaveBeenCalledWith({ msg: 'Unauthorized' });
});
