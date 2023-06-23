import { body } from 'express-validator';

export const loginValidation = [
  body("email", "Invalid email format").isEmail(),
  body("password", "Password must be at least 5 characters long").isLength({
    min: 5,
  }),
];

export const registerValidation = [
  body("email", "Invalid email format").isEmail(),
  body("password", "Password must be at least 5 characters long").isLength({
    min: 5,
  }),
  body("fullName", "Specify your name").isLength({ min: 3 }),
  body("avatarUrl", "Invalid avatar URL").optional().isURL(),
];

export const heroCreateValidation = [
  body('title', 'Enter post title').isLength({ min: 3 }).isString(),
  body('description', 'Enter post description').isLength({ min: 3 }).isString(),
];
