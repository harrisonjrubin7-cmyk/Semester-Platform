# Run Semester offline

The platform shell opens about 77 workspace prototypes, and many of them load their data files (CSV, JSON) at runtime. Browsers block that when a page is opened straight from disk (`file://`), so serve the folder locally:

```sh
cd "The Main Semester design system"     # the unzipped project folder
python3 -m http.server 8080
# then open http://localhost:8080/  — it redirects to the platform
```

No internet needed after that, except:
- Google Fonts (pages fall back to system fonts offline)
- React/Babel from unpkg on the React prototypes (open them once while online so the browser caches them, or vendor them)
- "Live" sign-in on the platform, which talks to your Supabase project

Everything you do in the prototypes is saved in this browser's localStorage only.
