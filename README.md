# Static Asset & Image Management Workflow
Supplemental Instruction LLC (S-H)

This guide documents the layout, folder structure, and naming conventions for website static assets. It is designed to act as a clear, step-by-step operating reference so that non-developers can replace, update, or add illustrations and graphics safely without breaking the interactive code.

---

## 📂 Asset Directory Structure

All static images, illustrations, and indicators are served out of the public folder:

```text
/public/
  ├── .nojekyll
  └── images/                     <-- Core Static Image Repository
       ├── default-og.png         <-- Default Social Sharing Preview Card
       ├── heroes/                <-- Large Banner & Aesthetic Backdrops
       │    └── hero-bento.png
       ├── logbooks/              <-- Printed Booklet Covers & Form Pictures
       │    ├── circadian.jpg
       │    └── wealth.jpg
       ├── badges/                <-- Gamified Achievements & Rewards
       │    ├── thrive-verified.png
       │    └── stoic-discipline.png
       └── avatars/               <-- Advisory Advisor Profile Pictures
            ├── advisor-jason.jpg
            └── advisor-emma.jpg
```

---

## 🏷️ Asset Naming Conventions

To keep standard asset syncs automatic, adhere strictly to the following naming principles:

1. **Lowercase and Hyphens Only**: Never use uppercase letters, spaces, or absolute file extensions like `.JPEG` (always use standard `.jpg` or `.png`).
   - ❌ *Incorrect*: `Jason Avatar.PNG`
   - ✅ *Correct*: `advisor-jason.png`
2. **Category Prefix Keys**: Always begin the filename with its category tag:
   - **Banners/Bento background grids**: `hero-[concept].jpg`
   - **Printed journals/books**: `logbook-[discipline].jpg`
   - **Rewards badges**: `badge-[milestone].png`
   - **Advisors profiles**: `avatar-[name].jpg`

---

## ⚡ Non-Developer safe Replacement Steps

If you need to update an existing image (e.g., swapping Jason's avatar for a newer professional bio photo):

### Step 1: Format and Size Your Image

To prevent slow page loads and preserve premium rendering speeds:
- Avoid importing raw phone pictures direct from cameras.
- Compress your image first using free safe compressors like **[TinyPNG](https://tinypng.com/)**.
- **Avatars**: Aim for a square aspect ratio (e.g., `400px` x `400px` in PNG or JPG format).
- **Logbooks/Covers**: Aim for standard portrait ratios (e.g., `600px` x `800px` in JPG format).

### Step 2: Match the File Name Exactly

If you want to replace an image without editing any files, name the new file **exactly** like the original file you are replacing (e.g., `avatar-jason.jpg`).

### Step 3: Upload the File

1. Locate the target folder under `/public/images/`.
2. Move your newly compressed file there.
3. Overwrite the existing asset when prompted.
4. Refresh your browser viewport tab to see your premium updated asset active immediately.
