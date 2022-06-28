import { db } from 'src/lib/db';

export const sellers = () => {
  return db.seller.findMany();
};

export const seller = ({ id }) => {
  return db.seller.findUnique({
    where: { id },
  });
};

export const createSeller = ({ input }) => {
  return db.seller.create({
    data: input,
  });
};

export const updateSeller = ({ id, input }) => {
  return db.seller.update({
    data: input,
    where: { id },
  });
};

export const deleteSeller = ({ id }) => {
  return db.seller.delete({
    where: { id },
  });
};
