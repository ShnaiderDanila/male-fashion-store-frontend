export const formatCreationDate = (createdAt: string | undefined) => {
  return createdAt?.split('T')[0];
};
