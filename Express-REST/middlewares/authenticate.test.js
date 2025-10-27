import { expect, test, vi } from "vitest";
import authenticate from "./authenticate";
import jwt from "jsonwebtoken";

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

test('next is called when valid token provided', async () => {
  // Arrange
  const req = {
    headers: {
      authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2OGZiNmE0OWI1ODkxYzk2OTQ0NzljMmMifQ.0_gboM6uUs0S2HOjrFwGPfZwPNRQybsdBwqtZSMRIGE'
    }
  };
  const res = {};
  const next = vi.fn();

  // Act
  authenticate(req, res, next);

  // Assert
  expect(next).toHaveBeenCalled();
});

test('next is called when valid token provided', async () => {
  // Arrange
  const req = {
    headers: {
      authorization: 'Bearer fake-valid-token'
    }
  };
  const res = {};
  const next = vi.fn();

  const originalVerify = jwt.verify;
  jwt.verify = vi.fn().mockReturnValue({ userId: '68fb6a49b5891c9694479c2c' });

  // Act
  authenticate(req, res, next);

  // Assert
  expect(next).toHaveBeenCalled();
  jwt.verify = originalVerify;
});
