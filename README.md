<p align="center"><img src="assets/banner.png" alt="Ayla tools — MOTH at a moonlit desk" width="100%"></p>

# Ayla tools for Pi

**Thoughtful tools. Independent packages. A quieter place to build.**

[Русский](README.ru.md) · [Pi](https://pi.dev) · [MIT](LICENSE)

A family of practical tools for people and their coding agents. Install only what you need in ordinary Pi: **no personal Ayla profile, private backend, server account, or custom launcher required**. The mascot is **MOTH**, our sleepy, quietly mischievous adult companion: lavender bob, charcoal cat ears, amber eyes and a cozy cardigan.

## Choose a tool

| Package | Use it for | Scope |
|---|---|---|
| [Ayla Compact](https://github.com/kekma-dot/ayla-tools-compact) | Quiet one-line terminal tool rendering | Pi 1.3.0 beta; execution remains in Pi |
| [Ayla Web](https://github.com/kekma-dot/ayla-tools-web) | Search, fetch, source evidence, stored content | Maintained `pi-web-access` fork; provider requirements vary |
| [Ayla Browse](https://github.com/kekma-dot/ayla-tools-browse) | Open, find and follow bounded document snapshots | Install with Ayla Web; not a UI browser |
| [Ayla Resolve](https://github.com/kekma-dot/ayla-tools-resolve) | Inspect a local Resolve project and current frame | Experimental macOS companion; exact native version/schema gate |

Each repository has its own English/Russian guide, dependency declaration, limits and verification. Packages are independent, not an all-or-nothing distribution. General backend, memory-service and personal infrastructure code is **not** part of this release.

## Your first install

Already have Pi and Git? Run this in your terminal:

```sh
pi install git:github.com/kekma-dot/ayla-tools-compact
```

Start Pi, or type `/reload` in an existing session. Ask it to list a small project directory: Compact changes the visible rows, not the tool's execution or permissions.

For web-document navigation, install the compatible pair in your terminal:

```sh
pi install git:github.com/kekma-dot/ayla-tools-web
pi install git:github.com/kekma-dot/ayla-tools-browse
```

The `browse` tool reads pages through the engine's `web_document`, which is **not registered by default**. Before reloading, add `"documentSnapshots": true` to `web-search.json` in your Pi agent directory (`~/.pi/agent/web-search.json`, or `$PI_CODING_AGENT_DIR/web-search.json` if you set one). If the file already exists, **merge** this key into it — do not overwrite your existing settings:

```json
{
  "documentSnapshots": true
}
```

Then `/reload` in Pi and ask: “Open https://example.com and find its heading.” Direct public-page retrieval does not need a search API key; search, model-assisted answers and special providers have separate requirements in the Web README. No browser account is bundled or silently connected.

For reproducibility, Pi accepts a Git commit suffix: `git:github.com/owner/repository@COMMIT`. Follow each package's compatibility notes. The launch baseline is **Pi 1.3.0**, Node **22.19+**; this is not a promise about future host releases or all operating systems.

## Let your agent help

Give your agent a repository URL and your goal; ask it to read that README, check prerequisites, install in the intended scope and verify the first example. Repository instructions do not authorize your agent to read credentials, weaken protections or publish your files.

This hub is also an optional **skills-only Pi package**:

```sh
pi install git:github.com/kekma-dot/ayla-tools
```

After `/reload`, `/skill:ayla-public-release` loads the release checklist for creating further Ayla-style public packages. It does not install the tool family, register executable tools, publish repositories automatically or grant agents additional permissions. You can also read [the skill](skills/ayla-public-release/SKILL.md) directly.

## Remove a package

```sh
pi remove git:github.com/kekma-dot/ayla-tools-compact
```

Replace the final name with the package you installed, then `/reload`. Use `pi config` or `"extensions": []` to disable an executable package without removing it. Avoid loading a branded package alongside its earlier fork when they register the same tools.

## Honest releases

- **Installable is not universally production-certified.** Feature tests, actual SDK loading, artifact checks and clean installation are distinct from live provider/audio/native acceptance.
- Optional providers can transmit URLs, prompts, source content or images to third parties. Read the individual data-flow sections before enabling them.
- GitHub publication is not npm publication or Pi-gallery indexing. Current installation commands intentionally use Git.
- We preserve upstream licenses and attribution. Ayla Web is a maintained fork of [Nico Bailon's pi-web-access](https://github.com/nicobailon/pi-web-access), not a claim that all of its code originated here.

## Identity and contribution

Keep tools small, useful and independently replaceable. Match the MOTH midnight-ink / lavender / amber family style while giving each feature its own scene. Banners were created using **GPT Image** from the owner-selected original MOTH design; personal reference sheets and accounts are not included. AI-assisted artwork has no exclusivity or suitability guarantee.

The [release skill](skills/ayla-public-release/SKILL.md) explains the practical source, privacy, license, testing, artwork and publication gates. Improvements should bring a runnable check for changed behavior, maintain both README languages, and state exactly what was and was not verified.
