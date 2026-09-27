export const getAllGymSteps = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
};
