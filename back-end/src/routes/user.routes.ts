import { Router } from "express";
import jwt from "jsonwebtoken";
import { string, z } from "zod";
import { prisma } from "../lib/prisma";
import auth from "../config/auth";
import multer from "multer";

const userRoutes = Router();

// Create multer object
const imageUpload = multer({
  dest: "files/avatar",
});

userRoutes.post("/register", async (request, response) => {
  const bodyshema = z.object({
    email: z.string().email(),
    name: z.string().min(3),
    password: z.string().min(8),
  });

  const data = bodyshema.parse(request.body);

  const isUser = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (isUser) {
    return response.status(401).json("O email já está a ser usado!");
  }

  const user = await prisma.user.create({
    data: {
      ...data,
    },
  });

  return response.status(201).send({ user });
});

userRoutes.get("/all", async (request, response) => {
  const users = await prisma.user.findMany({
    select: {
      name: true,
      id: true,
    },
  });

  return response.status(200).json(users);
});

userRoutes.get("/:email", async (request, response) => {
  const paramsSchema = z.object({
    email: string().email(),
  });

  const { email } = paramsSchema.parse(request.params);

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email,
    },
    select: {
      id: true,
      name: true,
    },
  });

  if (!user) {
    return response.status(404).send();
  }

  return response.status(200).send(user);
});

userRoutes.post("/login", async (request, response) => {
  const bodyshema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const { email, password } = bodyshema.parse(request.body);

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return response.status(404).send({ msg: "Email or Password is Wrong!" });
  }

  if (user.password !== password) {
    return response.status(404).send({ msg: "Email or Password is Wrong!" });
  }

  const token = jwt.sign(
    {
      name: user.name,
      email: user.email,
    },
    auth.key,
    { expiresIn: "7d" }
  );

  return response.status(202).send({ token });
});

export { userRoutes };
