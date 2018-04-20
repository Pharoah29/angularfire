export interface User{

    email: string;
    first_name:string;
    last_name: string;
    gender: string;
    id: number;
  
  }

  export interface SignInUser{
    email: string,
    password: string;
    token?: string;
  }