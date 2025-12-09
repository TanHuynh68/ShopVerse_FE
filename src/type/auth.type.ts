export interface DecodedUserRaw {
   data: {
    account_id: string;
    name: string;
    role: string;
    email?: string;
  };
}

export interface NormalizedUser {
  data: {
    account_id: string;
    name: string;
    role: string;
    email?: string;
  };
  exp?: number;
}
