import { createDefaultRoles } from './CreateDefaultRoles';
import { createCategory } from './CreateCategory';
import { createDefaultUser } from './CreateDefaultUser';

const initialSetups = async () => {
  await createDefaultRoles();
  await createCategory();
  await createDefaultUser();
};

module.exports = initialSetups;
