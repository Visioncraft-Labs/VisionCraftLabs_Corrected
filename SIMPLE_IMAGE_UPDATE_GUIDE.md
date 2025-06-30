# Simple Portfolio Image Update Guide

## Easy Way to Update Your Portfolio Images

**Single File to Edit:** `client/src/data/portfolio.ts`

### Step 1: Replace URLs
Open the file and replace any image URL with your own:

```typescript
// Change this line:
beforeImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
// To your image:
beforeImage: "https://your-domain.com/your-before-image.jpg",
```

### Step 2: Upload Your Images Anywhere
- Google Drive (make shareable)
- Dropbox (get direct link)  
- Your website's images folder
- Any image hosting service

### Step 3: Get Direct Image URLs
Make sure the URL ends with `.jpg`, `.png`, or `.webp`

### Current Portfolio Structure:
- **3 Featured Images** (home page)
- **12 Portfolio Images** (portfolio page)
- **Categories:** Studio, Lifestyle, Commercial

### That's It!
No complicated folders, no file management - just replace URLs and your images appear instantly throughout the site.

## New Side-by-Side View
Your before/after images now show side-by-side instead of hover overlay:
- Before image (left) with red "Before" badge
- After image (right) with green "After" badge
- Hover effects for better interaction