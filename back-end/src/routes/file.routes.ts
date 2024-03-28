import { Router } from "express";
import path from "path";
import { z } from "zod";
import { prisma } from "../lib/prisma";

const fileRoutes = Router()

fileRoutes.get("/avatar/:filename", async (request, response) => {
  const paramsShema = z.object({
    filename: z.string(),
  });

  const { filename } = paramsShema.parse(request.params);
    
    const image = await prisma.file.findUnique({
      where: { filename },
    });

    if (image) {
      const dirname = path.resolve();
      const fullfilepath = path.join(dirname, image.filepath);
      return response.type(image.mimetype).sendFile(fullfilepath);
    }
   
    return response.json({"invalido":filename});
});


fileRoutes.get("/product/:filename", async (request, response) => {
  const paramsShema = z.object({
    filename: z.string(),
  });

  const { filename } = paramsShema.parse(request.params);
    
    const image = await prisma.file.findUnique({
      where: { filename },
    });

    if (image) {
      const dirname = path.resolve();
      const fullfilepath = path.join(dirname, image.filepath);
      return response.type(image.mimetype).sendFile(fullfilepath);
    }
   
    return response.json({"invalido":filename});
  
});


export {fileRoutes}