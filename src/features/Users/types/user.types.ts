export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
}

export interface UserResponse {
  data: User[];
  total: number;
}
