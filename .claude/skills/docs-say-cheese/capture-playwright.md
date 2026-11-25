# Taking Screenshots with Playwright

## Getting Playwright

The docs repository doesn't include Playwright. Check in this order:

1. **Browser tools already connected** (a Playwright MCP server): use them.
2. **Otherwise**, explain to the user in one line that you need to download a browser-control tool (Playwright with Chromium, about 150 MB), and ask before installing. Install it in a temporary folder outside the repository (`npm init -y && npm i playwright && npx playwright install chromium`), and write your capture scripts there too. Leave the repository's `package.json` as it is.

## Capture Settings

* Use a visible browser (`headless: false`), so the user can sign in and see what you're doing.
* Use a fixed viewport, for example 1280 × 800, so that shots of the same page match each other.
* Use `deviceScaleFactor: 2` only if the user chose double resolution in step 1.
* Crop to the part of the page the docs talk about: screenshot the element (`locator.screenshot()`), not the whole window, unless the shot is about the whole page.
* Save each shot as `<ID>.png` in the shots folder.

## Signing In

Open the app, and tell the user: "Please sign in in the browser window that just opened, then tell me when you're done." Wait for them. Do the rest of the work in that same browser session.

## Gotchas

* **One session only.** Test apps often allow only a few signed-in users at once (a sign-in error such as HTTP 402 "license does not allow more users"). Run all captures in one browser context, one after another, and sign out at the end. Parallel captures, including from subagents, will lock you out.
* **Wait for the page to settle.** Charts, animations, and data load after the page appears. Wait for the element and for network idle, and add a short pause before capturing.
* **Missing fonts.** If text looks like a fallback font (for example, a serif where the app uses a sans-serif), the app isn't loading its font. Inject it with `@font-face` (`page.addStyleTag`), using the font files the app itself serves, and tell the user, since it's an app problem, not a docs one.
* **Things in the way.** Hide overlapping bars, banners, or cookie popups with `page.addStyleTag` (`display: none`) before capturing, and only for the shot that needs it.
* **Interactive states.** For a dropdown opened, an editor filled in, or a value selected, perform the clicks and typing in the script, then capture. Use the exact example values from the page text, so the image matches what the reader is told to do.
