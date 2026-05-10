import type { News } from "./_data/news.ts";
import type { Member } from "./_data/members.ts";
import type { Publication } from "./_data/publications.ts";

declare global {
  namespace ELL {
    export type {
      News,
      Member,
      Publication,
    };

    export interface Data extends Lume.Data {
      news: News[];
      members: Member[];
      publications: Publication[];
    }
  }
}
