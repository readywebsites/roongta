# Timeline Component - Quick Reference Guide

## 🚀 Quick Start

### 1. Add New Milestone (Most Common Task)

**Location**: `script.js` → Find `const timelineData = [`

```javascript
{
  year: 2026,
  achievements: [
    {
      title: "Your Achievement",
      description: "What you accomplished",
      type: "growth",        // award | innovation | sustainability | growth | milestone
      icon: "🎯"             // Any emoji
    }
  ]
}
```

---

## 🎨 Brand Customization

**Location**: `styles.css` → Find `:root {`

```css
--primary-color: #0a3d62; /* Main color */
--accent-color: #f9ca24; /* Highlight color */
--card-radius: 12px; /* Corner rounding */
--shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
```

All timeline elements automatically adapt! ✨

---

## ⚡ Quick Tweaks

### Change Animation Speed

`styles.css` → `.timeline-content-panel` → Change `0.5s` to your duration

### Change Gap Between Years

`styles.css` → `.timeline-wrapper` → Change `gap: 60px;`

### Change Sticky Offset

`styles.css` → `.timeline-years` → Change `top: 100px;`

---

## 🔌 Connect to API

**Location**: `script.js` → Inside `initializeTimeline()` function

```javascript
// Replace timelineData with API call
const response = await fetch("/api/timeline");
const timelineData = await response.json();
```

Expected format:

```json
[
  {
    "year": 2025,
    "achievements": [
      {
        "title": "String",
        "description": "String",
        "type": "String",
        "icon": "String/Emoji"
      }
    ]
  }
]
```

---

## 🛠️ Common Issues

| Issue                 | Solution                                                   |
| --------------------- | ---------------------------------------------------------- |
| Years not showing     | Check browser console for errors                           |
| Wrong colors          | Update `:root` variables in CSS                            |
| Mobile layout broken  | Check viewport meta tag in HTML head                       |
| Animations stuttering | Reduce animation duration or use `will-change: transform;` |
| Mobile scroll janky   | Add `scroll-behavior: smooth;`                             |

---

## 📱 Responsive Breakpoints

| Width      | Layout                               |
| ---------- | ------------------------------------ |
| > 1024px   | Vertical (years left, content right) |
| 768-1024px | Horizontal years grid                |
| < 768px    | Horizontal scrollable years          |

To change breakpoint:

- Find `@media (max-width: 1024px)` in CSS
- Find `@media (max-width: 768px)` in CSS

---

## ♿ Accessibility

Already included:

- ✅ ARIA roles (`role="tab"`, `role="tabpanel"`)
- ✅ Keyboard navigation (Arrow keys)
- ✅ Screen reader support
- ✅ Focus indicators

Test with:

- NVDA (free, Windows)
- Browser DevTools → Accessibility tab

---

## 🎯 Icon Reference

Popular emojis for achievements:

| Type               | Icons       |
| ------------------ | ----------- |
| **Award**          | 🏆 🥇 ⭐ 🎖️ |
| **Growth**         | 📈 👥 🏢 🌱 |
| **Innovation**     | 💡 🔐 🚀 ⚙️ |
| **Sustainability** | 🌍 ♻️ 🌿 🔋 |
| **Milestone**      | 🎉 🎯 🏁 📅 |
| **Property**       | 🏠 🏗️ 🏢 🔑 |

---

## 📊 Real-World Example

```javascript
const timelineData = [
  {
    year: 2025,
    achievements: [
      {
        title: "Smart Home Integration",
        description: "All units now feature IoT automation.",
        type: "innovation",
        icon: "🏠",
      },
      {
        title: "20,000 Homes Delivered",
        description: "Milestone: Homes for 20,000 families.",
        type: "growth",
        icon: "👥",
      },
    ],
  },
  {
    year: 2000,
    achievements: [
      {
        title: "Founded",
        description: "Started with a vision to change real estate.",
        type: "milestone",
        icon: "🎯",
      },
    ],
  },
];
```

---

## 🔍 Testing Checklist

- [ ] Desktop: Years clickable, content updates
- [ ] Tablet: Layout stacks properly
- [ ] Mobile: Years scroll horizontally
- [ ] Keyboard: Arrow keys navigate
- [ ] Screen reader: Reads all content
- [ ] Dark mode: Colors readable
- [ ] Low bandwidth: Loads without images
- [ ] Touch: Mobile buttons tap-friendly

---

## 📈 Performance Tips

✅ Already optimized:

- DOM reuse (no recreation)
- CSS animations (GPU-accelerated)
- Intersection Observer (viewport-triggered)
- Event delegation (fewer listeners)

For 1000+ years:

```javascript
// Paginate years
const BATCH_SIZE = 20;
const visibleYears = timelineData.slice(0, BATCH_SIZE);
// Render visible, load more on scroll
```

---

## 🎓 Learn More

Full documentation: See `TIMELINE_DOCUMENTATION.md`

Topics covered:

- Complete architecture
- API integration patterns
- Custom animations
- Advanced keyboard shortcuts
- Mobile optimization
- Screen reader testing

---

## 💬 Quick Questions

**Q: Can I have multiple achievements per year?**
A: Yes! Add multiple objects to the `achievements` array.

**Q: Can I change colors?**
A: Yes! Update CSS `:root` variables.

**Q: Can I connect to a database?**
A: Yes! Replace `timelineData` with API fetch.

**Q: Is it mobile-friendly?**
A: Yes! Responsive across all devices.

**Q: Can I add my own icons?**
A: Yes! Use emoji, Font Awesome, or custom SVGs.

---

**Last Updated**: January 2026
**Version**: 1.0
**Status**: Production Ready ✅
