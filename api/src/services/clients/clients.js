import { db } from 'src/lib/db';

export const clients = () => {
  return db.client.findMany();
};

export const client = ({ id }) => {
  return db.client.findUnique({
    where: { id },
  });
};

export const createClient = ({ input }) => {
  return db.client.create({
    data: input,
  });
};

export const updateClient = ({ id, input }) => {
  return db.client.update({
    data: input,
    where: { id },
  });
};

export const deleteClient = ({ id }) => {
  return db.client.delete({
    where: { id },
  });
};
