import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";

const productsOnCollections = Router();

productsOnCollections.post("/create", async (request, response) => {
  const bodyshema = z.object({
    collectionId: z.string(),
    productId: z.string(),
  });

  const data = bodyshema.parse(request.body);

  const isCollection = await prisma.collection.findFirst({
    where: {
      id: data.collectionId,
    },
  });

  const isProduct = await prisma.product.findFirst({
    where: {
      id: data.productId,
    },
  });

  if (!isCollection && !isProduct) {
    return response.status(401).json("A Categoria já está a ser usado!");
  }

  const productOnCollection = await prisma.productsOnCollections.create({
    data: {
      collectionId: data.collectionId,
      productId: data.productId,

    },
  });

  return response.status(201).send(productOnCollection);
});

export {productsOnCollections}