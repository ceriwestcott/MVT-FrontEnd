export * from './glossary.service';
import { GlossaryService } from './glossary.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [GlossaryService, UserService];
