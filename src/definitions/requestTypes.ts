import { Request } from "express";

export interface IGetCurrentUserRequest extends Request {
  userId?: string;
}

export interface ICreateCurrentUserRequest extends Request {
  body: {
    auth0Id: string;
    email: string;
    username: string;
    fullName?: string;
    address?: string;
    city?: string;
    country?: string;
  };
}

export interface IUpdateCurrentUserRequest extends Request {
  userId?: string;
  body: {
    fullName?: string;
    address?: string;
    city?: string;
    country?: string;
  };
}
