import { NeonHTTPAdapter } from "@lucia-auth/adapter-postgresql";
import { sql } from "./db";

export const adapter = new NeonHTTPAdapter(sql, {
  user: "auth_user",
  session: "user_session",
});
