import { createDefaultRoles } from './CreateDefaultRoles';
import { createCategory } from './CreateCategory';
import { createDefaultUser } from './CreateDefaultUser';
import { createProducts } from './CreateProducts';
import { testProducto } from './test-Producto';

const initialSetups = async () => {
  await createDefaultRoles();
  await createCategory();
  await createDefaultUser();
  await createProducts();
  await testProducto();
};

module.exports = initialSetups;
