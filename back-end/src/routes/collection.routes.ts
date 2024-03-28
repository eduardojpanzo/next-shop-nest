import { Router } from "express";
import { string, z } from "zod";
import { prisma } from "../lib/prisma";

const collectionRoutes = Router();

collectionRoutes.post("", async (request, response) => {
  const bodyshema = z.object({
    name: z.string(),
    description: z.string().min(3),
  });

  const data = bodyshema.parse(request.body);

  const isCollection = await prisma.collection.findFirst({
    where: {
      name: data.name,
    },
  });

  if (isCollection) {
    return response.status(401).json("A Coleção já está a ser usado!");
  }

  const collection = await prisma.collection.create({
    data: {
      name: data.name,
      description: data.description,
      slug: data.name.toLowerCase().replace(" ", "-"),
    },
  });

  return response.status(201).send(collection);
});

collectionRoutes.get("/all", async (request, response) => {
  try {
    const collections = await prisma.collection.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        products: {
          select:{
            product: true
          }
        },
      },
    });

    return response.status(200).json(collections);
  } catch (error) {
    return response.status(400).json({ msg: "Um erro Ocorreu na busca" });
  }
});

collectionRoutes.get("/:collectionId", async (request, response) => {
  const paramsSchema = z.object({
    collectionId: string(),
  });

  const { collectionId } = paramsSchema.parse(request.params);

  if (!collectionId) {
    return response.status(400).json({ msg: "Insira uma colleção válida" });
  }

  try {
    const collection = await prisma.collection.findFirstOrThrow({
      where: {
        id: collectionId,
      },
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        products: true,
      },
    });

    return response.status(200).json(collection);
  } catch (error) {
    return response.status(400).json({ msg: "Um erro Ocorreu na busca" });
  }
});

collectionRoutes.put("/:collectionId", async (request, response) => {
  const bodySchema = z.object({
    name: z.string(),
    description: z.string(),
  });

  const paramsSchema = z.object({
    collectionId: z.string(),
  });

  const { collectionId } = paramsSchema.parse(request.params);

  const { name, description } = bodySchema.parse(request.body);

  const collection = await prisma.collection.update({
    where: {
      id: collectionId,
    },
    data: {
      name,
      description,
      slug: name.toLowerCase().replace(" ", "-"),
    },
  });

  if (!collection) {
    return response.status(404).send();
  }

  return response.status(200).send(collection);
});

export { collectionRoutes };
