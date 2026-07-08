# Ming Yi & Sherina — ROM RSVP Site

Static site, no build step. RSVP responses write straight into your Google Sheet
via a free Apps Script Web App (no backend/server needed).

Registration date: **Sunday, 9 August 2026**, arrive by 8:45am, followed by a
dim sum brunch at Noble Season Chinese Restaurant.

Google Sheet already created: https://docs.google.com/spreadsheets/d/1QKE-v4G7lxwh5ma6HBbnNPSvensfGtG3Kxnj9g_9Vow/edit

## 1. Connect the Google Sheet (5 min)

1. Open the sheet link above.
2. Extensions > Apps Script.
3. Delete any placeholder code, paste in the contents of `apps-script.gs`.
4. Click Deploy > New deployment.
5. Click the gear icon next to "Select type" > Web app.
6. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click Deploy. Authorize when prompted (it's your own script, safe to allow).
8. Copy the Web app URL it gives you (ends in `/exec`).
9. Open `index.html`, find this line near the bottom:
   ```js
   const SHEET_ENDPOINT = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";
   ```
   Replace the placeholder with your copied URL.

Every RSVP submission will now append a row to the sheet automatically.

## 2. Push to GitHub

```bash
cd rom-rsvp
git init
git add .
git commit -m "ROM RSVP site"
gh repo create ming-yi-sherina-rom --public --source=. --push
```
(No `gh` CLI? Create a repo manually on github.com, then `git remote add origin <url>` and `git push -u origin main`.)

## 3. Deploy to Vercel

Easiest path — no CLI needed:
1. Go to vercel.com > Add New > Project.
2. Import the GitHub repo you just pushed.
3. Framework preset: **Other** (it's a static file, no build command needed).
4. Deploy.

Or via CLI:
```bash
npm i -g vercel
vercel --prod
```

You'll get a live URL like `ming-yi-sherina-rom.vercel.app`. You can add a
custom domain later from the Vercel project settings if you'd like.

## Notes

- Guests just type their own name (no pre-loaded guest list matching).
- Responses land in the Sheet with a timestamp, name, attending y/n, guest count, dietary notes, and message.
- To change the RSVP deadline, venue, or time, just edit the text directly in `index.html` — it's plain HTML, no templating.
- The `images/` folder (27 photos, already resized and compressed to ~6MB total) must be committed and pushed alongside `index.html` — the site references them by relative path (`images/photo-01.jpg`, etc.). Don't rename the files unless you also update the `src` attributes in `index.html`.
- Chapter 1 uses photos 13–27 (the proposal shoot), Chapter 2 uses photos 1–12 (Kyoto kimono shoot). Swap which images appear in the two featured/duo-grid slots or the filmstrip by editing the `src` values directly — no build step needed.
