# Simple Image Replacement Guide

## How to Update Your Portfolio Images

**One File to Edit:** `client/src/data/portfolio.ts`

Simply replace the image URLs with your own image URLs.

### Example:
```typescript
// Change this:
beforeImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
afterImage: "https://images.unsplash.com/photo-1583394838336-acd977736f90",

// To your images:
beforeImage: "https://your-website.com/images/before-1.jpg",
afterImage: "https://your-website.com/images/after-1.jpg",
```

### Where to Host Your Images:
- Upload to any image hosting service (Google Drive, Dropbox, your website)
- Get the direct image URL
- Replace the Unsplash URLs

### That's It!
No complicated folders, no file management - just replace URLs in one file and your images appear everywhere on the site.

### Current Images:
- 3 featured images (home page)
- 12 portfolio images (portfolio page)
- All organized by categories: Studio, Lifestyle, Commercial