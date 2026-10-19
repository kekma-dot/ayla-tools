---
name: ayla-public-release
description: Prepare, verify and publish an independent Ayla-tools Pi package with beginner-friendly English/Russian READMEs, consistent MOTH artwork, clean public dependencies, and evidence-based compatibility. Use when explicitly asked to create or release an Ayla-tools public repository; never publishes merely because this skill is loaded.
license: MIT
---

# Release an Ayla tool, not somebody's personal setup

## Contract and boundaries

Confirm the actual package/repository, owner, feature, tested Pi/Node/OS baseline, and authorization for public publication. Read the existing code and every touched caller before changing it. Do not publish a personal profile, backend, credentials, private history, sessions, user files or unreviewed reference images. Do not spawn agents unless the user separately authorizes delegation. Keep one writer per directory.

Use an ordinary Pi package and the public SDK. No family-specific runtime framework, launcher, SSH alias or home-directory layout may be required by strangers. Family branding must not change tool names, execution permissions or lifecycle semantics accidentally.

## Minimal deliverable

- `package.json`: unique name, real Pi resource entrypoints, supported Node engine, precise runtime dependencies and a package `files` allowlist. Pi-provided SDK/AI/TUI/agent/typebox packages belong in host peers according to the exact host documentation; wildcard peers do not certify future compatibility.
- `README.md` in English and equal `README.ru.md` in Russian, mutually linked near the top. Show the actual feature, terminal install command, `/reload`, first usable example, optional prerequisites, configuration, security/data flow, limitations, tested matrix, verification and uninstall. Distinguish terminal commands from Pi slash commands.
- Correct license and attribution. A maintained fork must credit its upstream author and explain the fork delta. Do not invent rights to third-party assets or relicense incompatible code.
- Repo-specific `assets/banner.png` using canonical adult MOTH: smoky-lavender bob, charcoal cat ears, amber eyes, cozy charcoal cardigan and small lavender ribbon. Midnight ink/lavender/amber, refined editorial anime, elegant ivory typography. Upload only explicitly authorized reference images. Use GPT Image when the user requests image generation; no silent paid-provider fallback. Never publish the owner's original favorite-character reference sheet.
- Meaningful tests and CI for claimed support. A green badge is not a substitute for a real installation and feature check.

## Verification ladder

1. Work from reviewed source bytes. Prefer a new curated history over exposing an unreviewed private history. Keep original repositories and live configuration unchanged unless separately authorized.
2. Inspect public dependency closure: no private SSH repos, unpublished npm packages, sibling `file:../` dependencies, implicit profile ancestry, undisclosed optional runtime imports or hidden provisioning.
3. Run source checks and feature regressions, including malformed inputs, errors, cancellation and relevant privacy/permission boundaries. A bug regression should fail on the old behavior.
4. Build/pack the actual artifact; inspect every shipped path, symlink and entrypoint. Refuse secret/runtime filenames before reading content. Scan permitted source/staged blobs with the available secret scanner, manually resolve synthetic-fixture hits, and state scan limitations. Never read actual credentials to inspect a suspected leak.
5. Install the packaged artifact in a disposable HOME/agent directory with synthetic or no credentials. Use the actual public SDK loader to verify exactly the intended registrations, `extensions: []` disabling, no factory-time processes/network, and clean shutdown.
6. Run at least one real feature path. Keep real external-account/audio/GUI/native checks separate from mocks. Record unavailable gates as BLOCKED or NOT_RUN, not PASS. Do not disable security or version gates to get green tests.
7. Cross-check docs against actual results. Avoid duplicate activators and clearly explain independent install/uninstall. Use a second reviewer when the user authorized one; review is evidence, not publication authority.
8. Before commit/push, verify repo root, target owner/remote, staged file allowlist, staged diff and checks. No force push, destructive cleanup or history rewrite without explicit authorization.
9. Publish only after authorization and clearance. Verify unauthenticated public access, fresh installation from the published immutable commit, hosted CI and actual README/image links. Git installation does not mean npm publication or automatic Pi-catalog listing.

## Finish or stop honestly

Provide concrete repository URLs and install commands, exact release commits, verified SDK/OS scope, test/install evidence and remaining limits. Map each requested deliverable to its actual artifact. If a material gate remains missing, do not call the whole release complete. Preserve partial work and report the blocker and the next needed action.

For an existing owner deployment, keep project notes in its canonical documentation system and archive only allowlisted, sanitized evidence with checksums. Never include credentials, browser profiles, all of HOME or a whole temporary directory in a release or backup.
