export type UserDataType = {
    email: string;
    first_name?: string;
    last_name?: string;
    username: string;
    avatar?: string;
    created_at: string;
    last_login?: string;
    wins?: number;
    losses?: number;
    draws?: number;
    matches_played?: number;
    is2fa: boolean;
    is_online: boolean;
    is_blocked: boolean;
    rank?: number;
    level?:number;
  };