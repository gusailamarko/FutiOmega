import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/", "routes/home.tsx"),
    route("/rolunk", "routes/rolunk.tsx"),
    route("/tanfolyamaink", "routes/tanfolyamaink.tsx"),
    route("/elerhetosegeink", "routes/elerhetosegeink.tsx")
] satisfies RouteConfig;
