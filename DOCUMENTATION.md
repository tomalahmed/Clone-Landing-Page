# Project Documentation

## Overview
This repository contains front-end clone projects of popular website landing pages, created for educational and portfolio purposes.

## Development Guidelines

### Code Standards
- Use semantic HTML5 elements
- Follow BEM-like CSS naming conventions
- Write clean, commented JavaScript
- Maintain consistent indentation (2 spaces)
- Use meaningful variable and function names

### File Naming Conventions
- HTML: `index.html` (main entry point)
- CSS: `styles.css` or descriptive names (e.g., `fb.css`)
- JavaScript: `script.js` or descriptive names
- README: `README.md` (uppercase)

### Project Structure
Each clone project should have:
```
ProjectName/
├── index.html      # Main HTML file
├── styles.css      # Stylesheet
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## Git Workflow

### Branching Strategy
- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - New features
- `fix/*` - Bug fixes

### Commit Messages
Follow conventional commits format:
```
feat: Add new feature
fix: Fix bug in component
docs: Update documentation
style: Format code
refactor: Refactor code structure
```

## Testing Checklist

Before committing, ensure:
- [ ] Code runs without errors
- [ ] Responsive on mobile, tablet, desktop
- [ ] Cross-browser compatibility tested
- [ ] README is updated
- [ ] Code is commented
- [ ] No console errors
- [ ] Forms validate properly
- [ ] All links work correctly

## Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Testing

Test at these breakpoints:
- 320px (Mobile S)
- 375px (Mobile M)
- 425px (Mobile L)
- 768px (Tablet)
- 1024px (Laptop)
- 1440px (Desktop)

## Accessibility Checklist

- [ ] Proper heading hierarchy (h1-h6)
- [ ] Alt text for images
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AA
- [ ] Form labels associated correctly
- [ ] Focus indicators visible

## Performance Optimization

- Optimize images (compress, use appropriate formats)
- Minify CSS/JS for production
- Use CSS variables for repeated values
- Minimize HTTP requests
- Defer non-critical JavaScript

## Adding New Projects

1. Create new folder with project name
2. Add index.html, styles.css, script.js
3. Create comprehensive README.md
4. Update main README.md with project info
5. Test thoroughly
6. Commit with descriptive message

## Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3C Standards](https://www.w3.org/)
- [Can I Use](https://caniuse.com/)

### Tools
- [Responsive Design Checker](https://responsivedesignchecker.com/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### Inspiration
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)
- [Awwwards](https://www.awwwards.com/)

## Troubleshooting

### Common Issues

**Issue**: Layout breaks on mobile
**Solution**: Check media queries, use relative units

**Issue**: JavaScript not working
**Solution**: Check console for errors, verify file paths

**Issue**: CSS not loading
**Solution**: Verify file path in HTML, check syntax errors

**Issue**: Form validation not working
**Solution**: Check event listeners, verify input names/IDs

## Deployment

### GitHub Pages
1. Go to repository Settings
2. Navigate to Pages
3. Select branch (main)
4. Save and wait for deployment
5. Access at: `https://username.github.io/repo-name/`

### Netlify
1. Drag and drop project folder
2. Or connect Git repository
3. Auto-deploys on push

### Vercel
1. Import Git repository
2. Configure project settings
3. Deploy

## Maintenance

- Update dependencies regularly
- Test on new browser versions
- Fix reported bugs promptly
- Improve based on feedback
- Keep documentation current

## Contributors

When contributing:
1. Fork the repository
2. Create feature branch
3. Make changes with clear commits
4. Test thoroughly
5. Submit pull request with description

## License

All projects are open source for educational purposes. Respect trademarks and intellectual property of original brands.

## Contact & Support

For questions or issues:
- Open a GitHub issue
- Check existing documentation
- Review code comments

---

**Maintained by**: NA Tomal
**Last Updated**: January 4, 2026
**Version**: 1.0
