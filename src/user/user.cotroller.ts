import { Controller, Post } from "@nestjs/common";
import { Routes } from "../utils/constants";

@Controller(Routes.USERS)
export class UserController {}