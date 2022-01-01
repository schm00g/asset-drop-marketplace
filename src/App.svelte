<script lang="ts">
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./views/Home.svelte";
	import Profile from "./views/Profile.svelte";
	import Settings from "./views/Settings.svelte";
	import Blog from "./views/Blog.svelte";
	import Help from "./views/Help.svelte";
</script>

<Router primary={false}>
	<nav>
		<Link to="/">Home</Link>
		<Link to="profile">Profile</Link>
		<Link to="settings">Settings</Link>
		<Link to="blog">Blog</Link>
		<Link to="help">Help</Link>
	</nav>
	<div>
		<Route path="/">
			<Home />
		</Route>
		<Route path="profile">
			<Profile />
		</Route>
		<Route path="settings">
			<Settings />
		</Route>
		<Route path="blog">
			<Blog />
		</Route>
		<Route path="help">
			<Help />
		</Route>
	</div>
</Router>