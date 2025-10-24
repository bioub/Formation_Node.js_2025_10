import * as User from "../models/user.js";

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 */
export async function login(req, res) {
  const token = await User.login(req.body);

  if (!token) {
    res.statusCode = 400;
    return res.json({
      msg: "Wrong username/password",
    });
  }

  res.json({ token });
}

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 */
async function register(req, res) {
  const user = await User.createUser(req.body);
  res.statusCode = 201;
  res.json({ _id: user._id, username: user.username });
}

export { register };
