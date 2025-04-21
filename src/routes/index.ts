import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../pages/Home";

export const Route = createFileRoute("/")({
	component: Home,
});

// conosle.log(Route1);
// console.log(Route2);