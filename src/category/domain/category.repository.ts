
import { CategoryEntity } from "./category.entity";

export interface CategoryRepository {
  findById(uuid: string): Promise<CategoryEntity | null>;
  register(category: CategoryEntity): Promise<CategoryEntity | null>;
  listCategories(): Promise<CategoryEntity[] | null>;
}