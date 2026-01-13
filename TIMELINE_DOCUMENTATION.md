# Company Timeline Section - Complete Documentation

## 📋 Overview

A production-ready, responsive, and accessible company timeline component that displays organizational milestones, achievements, and growth over multiple years. The timeline automatically adapts to desktop (vertical layout), tablet (stacked), and mobile (horizontal scrollable) devices.

**Key Features:**

- ✅ Semantic HTML5 with ARIA roles for accessibility
- ✅ Responsive design (vertical → horizontal → scrollable)
- ✅ Smooth CSS animations and transitions
- ✅ Keyboard navigation (Arrow keys)
- ✅ Intersection Observer for viewport animations
- ✅ Brand-adaptive CSS variables
- ✅ No framework dependencies (vanilla JavaScript)
- ✅ Mobile-optimized with touch-friendly interactions
- ✅ Screen reader compatible
- ✅ Performance optimized (minimal DOM reflows)

---

## 🎯 Component Structure

### HTML Sections

```
.timeline-section
├── .section-header (Title + Subtitle)
├── .timeline-container
│   ├── .timeline-wrapper (Desktop/Tablet)
│   │   ├── .timeline-years (Vertical year buttons)
│   │   └── .timeline-content-panel (Content display)
│   ├── .timeline-mobile-scroll (Mobile horizontal years)
│   └── .timeline-mobile-content (Mobile content area)
```

### Key Elements

| Element                    | Purpose                         | Desktop | Mobile |
| -------------------------- | ------------------------------- | ------- | ------ |
| `.timeline-years`          | Year selection buttons (sticky) | ✅      | ❌     |
| `.timeline-mobile-years`   | Horizontal scrollable years     | ❌      | ✅     |
| `.timeline-content-panel`  | Achievement display             | ✅      | ❌     |
| `.timeline-mobile-content` | Mobile achievement display      | ❌      | ✅     |
| `.achievement-item`        | Individual milestone card       | ✅      | ✅     |

---

## 🛠️ How to Add New Years

### Step 1: Locate Timeline Data

Find the `timelineData` array in `script.js` (around line 700):

```javascript
const timelineData = [
  {
    year: 2025,
    achievements: [
      {
        title: "Achievement Title",
        description: "Description of what was accomplished",
        type: "innovation", // or: award, sustainability, growth, milestone
        icon: "💡",
      },
      // ... more achievements
    ],
  },
  // ... more years
];
```

### Step 2: Add New Year Object

Insert a new year in chronological order (newest first):

```javascript
const timelineData = [
  {
    year: 2026,
    achievements: [
      {
        title: "Smart City Integration",
        description: "Launched IoT-enabled homes with smart home automation.",
        type: "innovation",
        icon: "🏠",
      },
      {
        title: "50-Year Legacy",
        description:
          "Celebrated 28 years of building dreams and creating legacies.",
        type: "milestone",
        icon: "🎉",
      },
    ],
  },
  // ... existing data ...
];
```

### Step 3: Save and Refresh

The timeline will automatically:

- Add the new year to both desktop and mobile layouts
- Set the newest year as the default selection
- Render all achievements immediately

**Achievement Type Options:**

- `award` - Recognition, certifications, accolades
- `innovation` - New technologies, features, initiatives
- `sustainability` - Environmental, green initiatives
- `growth` - Expansion, milestones, customer base
- `milestone` - Major anniversaries, significant events

---

## 🎨 Customizing Animations

### Animation Duration

Edit in `styles.css`:

```css
.timeline-content-panel {
  animation: slideInRight 0.5s ease-out; /* Change 0.5s */
}

.achievement-item {
  animation: slideInLeft 0.5s ease-out; /* Change 0.5s */
}
```

### Animation Delay (Staggered Effect)

```css
.achievement-item:nth-child(2) {
  animation-delay: 0.1s; /* Increase for more stagger */
}

.achievement-item:nth-child(3) {
  animation-delay: 0.2s;
}
```

### Available Animations (in CSS)

| Animation      | Effect               |
| -------------- | -------------------- |
| `fadeInUp`     | Fade in + Slide up   |
| `slideInRight` | Slide from right     |
| `slideInLeft`  | Slide from left      |
| `fadeIn`       | Simple fade          |
| `dotPulse`     | Pulse effect on dots |

### Create Custom Animation

```css
@keyframes customPulse {
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.achievement-item {
  animation: customPulse 0.6s ease-out;
}
```

### Disable Animations for Users Who Prefer Reduced Motion

Already implemented! The component respects `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎨 Brand Customization

All colors, fonts, and spacing use CSS variables defined at `:root`. No hardcoded values!

### Existing CSS Variables

```css
:root {
  /* Colors */
  --primary-color: #0a3d62; /* Timeline background, year title */
  --secondary-color: #3c6382; /* Hover effects, gradients */
  --accent-color: #f9ca24; /* Highlight, icons, badges */
  --light-color: #f5f6fa; /* Light backgrounds */
  --dark-color: #2d3436; /* Dark text */
  --text-color: #333; /* Primary text */
  --text-light: #777; /* Secondary text */

  /* Effects */
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  --card-radius: 12px;
  --transition: all 0.3s ease;
}
```

### How to Change Brand Colors

1. **Update `:root` variables in `styles.css`:**

```css
:root {
  --primary-color: #1a4d7a; /* Change to your primary */
  --accent-color: #ff6b35; /* Change to your accent */
}
```

2. **All timeline elements automatically adapt:**
   - Year button active state
   - Achievement borders and backgrounds
   - Icons and badges
   - Hover effects
   - Gradients

### Suggested Brand Colors for Real Estate

```css
/* Modern Professional */
--primary-color: #1e3a5f;
--secondary-color: #2d5f8d;
--accent-color: #e8a035;

/* Luxury Minimalist */
--primary-color: #0d0d0d;
--secondary-color: #333;
--accent-color: #d4af37;

/* Natural/Eco */
--primary-color: #2d5a3d;
--secondary-color: #4a7c59;
--accent-color: #f9a826;
```

---

## 📱 Responsive Breakpoints

The timeline adapts at these breakpoints:

| Breakpoint     | Device Type | Layout                                              |
| -------------- | ----------- | --------------------------------------------------- |
| > 1024px       | Desktop     | Vertical year buttons (sticky) + Side content panel |
| 768px - 1024px | Tablet      | Year buttons as grid + Stacked content              |
| < 768px        | Mobile      | Horizontal scrollable years + Content below         |

### Force Desktop/Mobile Layout (if needed)

```javascript
// Force desktop layout
@media (max-width: 1200px) {
  .timeline-wrapper {
    grid-template-columns: 1fr;
  }
}

// Show mobile layout earlier
@media (max-width: 900px) {
  .timeline-wrapper {
    display: none;
  }
  .timeline-mobile-scroll,
  .timeline-mobile-content {
    display: block;
  }
}
```

---

## ♿ Accessibility Features

### Built-in ARIA Support

```html
<nav class="timeline-years" aria-label="Company timeline years" role="tablist">
  <button
    class="timeline-year-btn active"
    role="tab"
    aria-selected="true"
    aria-controls="timeline-content-0"
  >
    2025
  </button>
</nav>

<div class="timeline-achievements" role="tabpanel" aria-live="polite">
  <!-- Content automatically announced to screen readers -->
</div>
```

### Keyboard Navigation

| Key                      | Action                   |
| ------------------------ | ------------------------ |
| Arrow Up / Arrow Left    | Go to previous year      |
| Arrow Down / Arrow Right | Go to next year          |
| Tab                      | Focus navigation buttons |
| Enter/Space              | Activate focused button  |

### Screen Reader Testing

Test with:

- **NVDA** (Windows, free)
- **JAWS** (Windows, premium)
- **VoiceOver** (macOS/iOS, built-in)
- **TalkBack** (Android, built-in)

---

## 🔌 Connecting to CMS/API

### Method 1: Fetch from REST API

```javascript
// Replace timelineData in script.js
async function initializeTimeline() {
  try {
    // Fetch timeline data from your API
    const response = await fetch("/api/company-timeline");
    const timelineData = await response.json();

    // ... rest of initialization code
    renderYearsNav();
    renderMobileYears();
    selectYear(0);
  } catch (error) {
    console.error("Failed to load timeline:", error);
    // Fallback to default data
  }
}
```

### Expected API Response Format

```json
[
  {
    "year": 2025,
    "achievements": [
      {
        "title": "Achievement Title",
        "description": "Detailed description",
        "type": "innovation",
        "icon": "💡"
      }
    ]
  }
]
```

### Method 2: Real-time Updates with WebSocket

```javascript
const ws = new WebSocket("wss://your-api.com/timeline-updates");

ws.addEventListener("message", (event) => {
  const newTimelineData = JSON.parse(event.data);

  // Update timeline
  timelineData = newTimelineData;

  // Re-render
  renderYearsNav();
  renderMobileYears();
  selectYear(0);
});
```

### Method 3: WordPress (using REST API)

```javascript
// Fetch from WordPress ACF Repeater
fetch("/wp-json/wp/v2/timeline-items")
  .then((res) => res.json())
  .then((items) => {
    // Transform ACF data to match expected format
    const formatted = items.map((item) => ({
      year: item.acf.year,
      achievements: item.acf.achievements.map((ach) => ({
        title: ach.title,
        description: ach.description,
        type: ach.category,
        icon: ach.emoji_icon,
      })),
    }));

    // Update timeline
    timelineData = formatted;
    renderYearsNav();
  });
```

---

## 🚀 Performance Optimization

### Current Optimizations

✅ **DOM Reuse**: Years and content use `.innerHTML` for efficient updates
✅ **Event Delegation**: Single listeners on containers instead of individual elements
✅ **Intersection Observer**: Animations only trigger when section enters viewport
✅ **CSS Animations**: Hardware-accelerated transforms instead of JavaScript
✅ **Minimal Reflows**: Content updates grouped together
✅ **Lazy Loading**: Achievements rendered on-demand

### Measure Performance

```javascript
// Performance marks
performance.mark("timeline-start");
initializeTimeline();
performance.mark("timeline-end");

performance.measure("timeline", "timeline-start", "timeline-end");
console.log(performance.getEntriesByName("timeline")[0]);
```

### Tips for 1000+ Years of Data

If you have extensive timeline data:

```javascript
// Paginate years (show 12 at a time)
const YEARS_PER_PAGE = 12;
let currentPage = 0;

function renderPagedYears() {
  const start = currentPage * YEARS_PER_PAGE;
  const end = start + YEARS_PER_PAGE;
  const paginatedYears = timelineData.slice(start, end);
  // Render...
}
```

---

## 🐛 Troubleshooting

### Years Not Displaying

**Problem**: No year buttons appear

**Solution**:

1. Check browser console for errors
2. Verify `timelineData` array is defined
3. Ensure DOM elements exist:
   ```javascript
   console.log(document.querySelector(".timeline-years")); // Should not be null
   ```

### Animations Not Playing

**Problem**: Content appears instantly without animations

**Solution**:

1. Check if user has enabled `prefers-reduced-motion`
2. Verify CSS file is loaded: `<link rel="stylesheet" href="styles.css">`
3. Check browser dev tools → Elements → Computed styles for animation properties

### Mobile Layout Not Switching

**Problem**: Mobile layout shows desktop view

**Solution**:

1. Verify viewport meta tag:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```
2. Check CSS media queries are not overridden
3. Test in real device (browser zoom affects responsive behavior)

### Keyboard Navigation Not Working

**Problem**: Arrow keys don't change years

**Solution**:

1. Click on a year button first (needs focus)
2. Check JavaScript console for errors
3. Verify keyboard event listeners are attached (open DevTools → Event Listeners)

---

## 📚 Code Examples

### Example 1: Multiple Achievements per Year

```javascript
{
  year: 2024,
  achievements: [
    {
      title: "Record Sales",
      description: "1000+ homes delivered in a single year",
      type: "growth",
      icon: "📈"
    },
    {
      title: "Green Certification",
      description: "All projects now LEED Gold certified",
      type: "sustainability",
      icon: "🌱"
    },
    {
      title: "Innovation Award",
      description: "Won Best Smart Real Estate Developer",
      type: "award",
      icon: "🏆"
    },
    {
      title: "Community Center",
      description: "Opened 50,000 sqft community hub",
      type: "innovation",
      icon: "🏛️"
    }
  ]
}
```

### Example 2: Programmatic Year Selection

```javascript
// Navigate to a specific year
function goToYear(targetYear) {
  const index = timelineData.findIndex((item) => item.year === targetYear);
  if (index !== -1) {
    selectYear(index);
  }
}

// Usage
goToYear(2020);
```

### Example 3: Add Event Listener for Year Changes

```javascript
// Detect when year changes
const originalSelectYear = window.selectYear;
window.selectYear = function (index) {
  originalSelectYear(index);

  // Fire custom event
  const year = timelineData[index].year;
  document.dispatchEvent(
    new CustomEvent("timelineYearChanged", {
      detail: { year },
    })
  );
};

// Listen for year changes
document.addEventListener("timelineYearChanged", (e) => {
  console.log(`User selected year: ${e.detail.year}`);
  // Track analytics, etc.
});
```

---

## 📋 Component Checklist

- ✅ HTML is semantic with ARIA roles
- ✅ CSS uses variables for brand adaptation
- ✅ JavaScript is vanilla (no jQuery/frameworks)
- ✅ Responsive across desktop/tablet/mobile
- ✅ Keyboard accessible
- ✅ Screen reader compatible
- ✅ Animations smooth and optional
- ✅ Performance optimized
- ✅ Intersection Observer implemented
- ✅ Mobile touch-friendly
- ✅ 6-8 years of dummy data included
- ✅ Documented for easy maintenance

---

## 📞 Support & Maintenance

### File Locations

- **HTML Structure**: [`index.html`](index.html) (lines: search for "timeline-section")
- **Styles**: [`styles.css`](styles.css) (lines: search for "TIMELINE SECTION STYLES")
- **JavaScript**: [`script.js`](script.js) (function: `initializeTimeline()`)

### Making Changes

1. Always backup files before editing
2. Test changes on multiple devices
3. Clear browser cache (Ctrl+Shift+Delete)
4. Validate HTML: https://validator.w3.org/
5. Test accessibility: https://wave.webaim.org/

### Common Customizations

| Need           | File         | Search For                      |
| -------------- | ------------ | ------------------------------- |
| Change colors  | `styles.css` | `:root` variables               |
| Add years      | `script.js`  | `const timelineData = [`        |
| Modify layout  | `styles.css` | `@media (max-width:`            |
| Add animations | `styles.css` | `@keyframes`                    |
| Connect API    | `script.js`  | `function initializeTimeline()` |

---

## 🎉 You're All Set!

The timeline component is production-ready and fully customizable. Start by:

1. ✅ Adding your company's actual milestone data
2. ✅ Adjusting brand colors and fonts
3. ✅ Testing on real devices
4. ✅ Connecting to your CMS/API
5. ✅ Tracking user interactions

Happy building! 🚀
