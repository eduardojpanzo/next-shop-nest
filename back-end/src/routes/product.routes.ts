import { Router } from "express";
import multer from "multer";
import { z } from "zod";
import { prisma } from "../lib/prisma";

const productRoutes = Router();

// Create multer object
const imageUpload = multer({
  storage: multer.diskStorage(
      {
          destination: function (req, file, cb) {
              cb(null, "files/product/");
          },
          filename: function (req, file, cb) {
              cb(
                  null,
                  new Date().valueOf() + 
                  '_' +
                  file.originalname
              );
          }
      }
  ), 
});

productRoutes.post("/create", async (request, response) => {
  const bodyShema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    stockAmount: z.number(),
  });

  const { name, description, price, stockAmount } = bodyShema.parse(request.body);

  try {
    const produtc = await prisma.product.create({
      data: {
        name,
        slug: name.toLowerCase().replace(" ", "-"),
        description,
        price,
        stockAmount,
      },
    });

    return response
      .status(201)
      .json({ msg: "producto criado", id: produtc.id });
  } catch (e) {
    response.status(400).json({ msg: "Aconteceu um erro no momento de criar" });
  }
});

productRoutes.put(
  "/image/:productId",
  imageUpload.single("product_image"),
  async (request, response) => {
    const paramsShema = z.object({
      productId: z.string(),
    });

    const fileShema = z.object({
      filename : z.string(),
      path: z.string(),
      mimetype : z.string(),
      size: z.number(),
    });

    const { productId } = paramsShema.parse(request.params);

    const file = fileShema.parse(request.file);
    
    
    if (!productId) {
      return response
        .status(400)
        .json({ msg: "Necessário informar um produto!" });
    }
    
    if (!file) {
      return response.status(400).json({ msg: "Carregar um ficheiro!" });
    }

    const createfile =  await prisma.file.create({
      data: {
         filepath: file.path,
         filename: file.filename,
         mimetype: file.mimetype,
         size: file.size
        }
      })
      
      if (!createfile) {
        return response
        .status(400)
        .json({ msg: "Erro ao cria um ficheiro" });
      }
      
      const product = await prisma.product.findUnique({
        where: { id: productId },
      });
      
      if (!product) {
        return response
        .status(404)
        .json({ msg: "Necessário informar um produto válido!" });
      }
      
      try {
        const updateProduct = await prisma.product.update({
          where: { id: product.id },
          data: {
          idImage: createfile.filepath,
        },
      });
      return response.status(200).json(updateProduct);
    } catch (error) {
      return response.status(400).json({ msg: "Problema inesperado" });
    }
  }
);

productRoutes.get("/:productId", async (request, response) => {
  const paramsShema = z.object({
    productId: z.string(),
  });

  const { productId } = paramsShema.parse(request.params);

  try {
    const product = await prisma.product.findUniqueOrThrow({
      where: {
        id: productId,
      },
      include: {
        category: true,
        collections: true,
      },
    });

    return response.status(200).json(product);
  } catch (error) {
    return response
      .status(400)
      .json({ msg: "Erro inesperado no momento da busca" });
  }
});

productRoutes.get("/get/all", async (request, response) => {
  const product = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      stockAmount: true,
      slug: true,
      idImage: true,
    },
  });

  if (!product.length) {
    return response.status(204).json("Não tem produtp");
  }

  return response.status(200).json(product);
});

productRoutes.put("/category", async (request, response) => {
  const bodyshema = z.object({
    categoryId: z.string(),
    productId: z.string(),
  });

  const {categoryId, productId} = bodyshema.parse(request.body);

  const isCategory = await prisma.category.findFirst({
    where: {
      id: categoryId,
    },
  });

  const isProduct = await prisma.product.findFirst({
    where: {
      id: productId,
    },
  });

  if (!isCategory && !isProduct) {
    return response.status(404).json("A Categoria ou producto não existem!");
  }

  const category = await prisma.product.update({
    where:{
      id: productId
    },
    data: {
      categoryId,
    },
  });

  return response.status(201).send(category);

});

export { productRoutes };
