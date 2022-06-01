import { Family } from "./family";
import { Score } from "./score";
import { User } from "./user";

export class FamilyMember {
    readonly id: number;
    user: User;
    family: Family;
    enumRole: EnumRole;
    score: Score;
    tasks: Array<string>;
}
