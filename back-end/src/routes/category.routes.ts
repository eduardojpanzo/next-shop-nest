import { Router } from "express";
import { string, z } from "zod";
import { prisma } from "../lib/prisma";

const categoryRoutes = Router();

categoryRoutes.post("", async (request, response) => {
  const bodyshema = z.object({
    name: z.string(),
    description: z.string().min(3),
  });

  const data = bodyshema.parse(request.body);

  const isCategory = await prisma.category.findFirst({
    where: {
      name: data.name,
    },
  });

  if (isCategory) {
    return response.status(401).json("A Categoria já está a ser usado!");
  }

  const category = await prisma.category.create({
    data: {
      name: data.name,
      description: data.description,
      slug: data.name.toLowerCase().replace(" ", "-"),
    },
  });

  return response.status(201).send(category);
});

categoryRoutes.get("/all", async (request, response) => {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        products: true,
      },
    });

    return response.status(200).json(categories);
  } catch (error) {
    return response.status(400).json({ msg: "Um erro Ocorreu na busca" });
  }
});

categoryRoutes.get("/:categoryId", async (request, response) => {
  const paramsSchema = z.object({
    categoryId: string(),
  });

  const { categoryId } = paramsSchema.parse(request.params);

  if (!categoryId) {
    return response.status(400).json({ msg: "Um erro Ocorreu na busca" });
  }

  try {
    const category = await prisma.category.findFirstOrThrow({
      where: {
        id: categoryId,
      },
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        products: true,
      },
    });

    return response.status(200).json(category);
  } catch (error) {
    return response.status(400).json({ msg: "Um erro Ocorreu na busca" });
  }
});

categoryRoutes.put("/:categoryId", async (request, response) => {
  const bodySchema = z.object({
    name: z.string(),
    description: z.string(),
  });

  const paramsSchema = z.object({
    categoryId: z.string(),
  });

  const { categoryId } = paramsSchema.parse(request.params);

  const { name, description } = bodySchema.parse(request.body);

  const category = await prisma.category.update({
    where: {
      id: categoryId,
    },
    data: {
      name,
      description,
      slug: name.toLowerCase().replace(" ", "-"),
    },
  });

  if (!category) {
    return response.status(404).send();
  }

  return response.status(200).send(category);
});


export { categoryRoutes };
