import { Router } from "express";
import { userRoutes } from "./user.routes";
import { productRoutes } from "./product.routes";
import { categoryRoutes } from "./category.routes";
import { collectionRoutes } from "./collection.routes";
import { fileRoutes } from "./file.routes";
import { productsOnCollections } from "./productsoncollections.toutes";

const routes = Router();

routes.use("/user", userRoutes);

routes.use("/product", productRoutes);

routes.use("/category", categoryRoutes);

routes.use("/collection", collectionRoutes);

routes.use("/files", fileRoutes);

routes.use("/productsOnCollections",productsOnCollections)

export { routes };
