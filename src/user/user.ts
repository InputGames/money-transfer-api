import { User } from "src/utils/typeorm";
import { FindUserOptions, FindUserParams } from "src/utils/types/queries";

export interface IUserService {
	findUser(
		params: FindUserParams,
		options?: FindUserOptions,
		): Promise<User>;
	createUser(params: FindUserParams): Promise<User>;
}