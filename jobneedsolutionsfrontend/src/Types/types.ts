export type ContentType = {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  resume?: string;
};

export type DrawerOptionType = {
  id: number;
  name: string;
  icon: string;
  enabled: boolean;
};
