![Ayla tools](assets/banner.png)

# Ayla tools for Pi

[Русский](README.ru.md)

Extensions and skills for [Pi](https://pi.dev). Install each package separately.

| Package | What it does |
|---|---|
| [Compact](https://github.com/kekma-dot/ayla-tools-compact) | Compact terminal output for tool calls. |
| [Web](https://github.com/kekma-dot/ayla-tools-web) | Web search, page retrieval and source checking. |
| [Browse](https://github.com/kekma-dot/ayla-tools-browse) | Open, find and follow links in document snapshots. Requires Web. |
| [Voice](https://github.com/kekma-dot/ayla-tools-voice) | Talk to your Pi session through Codex Live. Experimental. |
| [Resolve](https://github.com/kekma-dot/ayla-tools-resolve) | Inspect DaVinci Resolve projects on macOS. Experimental. |
| [Contract](https://github.com/kekma-dot/ayla-tools-contract) | Shared status signals for extension authors. A Node library. |

## Install

You need Pi, Git and Node 22.19 or newer. The extensions have been tested with Pi 1.3.0. Check each README for platform and account requirements.

For compact tool output:

```sh
pi install git:github.com/kekma-dot/ayla-tools-compact
```

Restart Pi after installation. To remove it:

```sh
pi remove git:github.com/kekma-dot/ayla-tools-compact
```

For document navigation:

```sh
pi install git:github.com/kekma-dot/ayla-tools-web
pi install git:github.com/kekma-dot/ayla-tools-browse
```

Add `"documentSnapshots": true` to `~/.pi/agent/web-search.json` before restarting Pi. If the file already exists, merge the setting without replacing your other options. With a custom agent directory, use `$PI_CODING_AGENT_DIR/web-search.json`.

```json
{
  "documentSnapshots": true
}
```

Ask Pi to open `https://example.com` and find its heading. Direct page retrieval needs no search API key; search providers have their own requirements.

These packages are installed from Git, not npm. Append `@COMMIT` to a Git source to pin a revision.

## Release checklist

This repository also contains a skill for preparing independent Pi packages:

```sh
pi install git:github.com/kekma-dot/ayla-tools
```

After reloading Pi, run `/skill:ayla-public-release`. It covers packaging, documentation, dependencies and release checks. Installing this hub adds only the skill; install the extensions separately.

## License

[MIT](LICENSE). Web is a maintained fork of [Nico Bailon's pi-web-access](https://github.com/nicobailon/pi-web-access). See each package for attribution and third-party notices.
