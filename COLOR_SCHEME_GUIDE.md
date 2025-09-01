# Color Scheme Support

This application now supports automatic light/dark theme switching based on the CSS `color-scheme` property.

## How to Switch Themes

To switch between light and dark themes, simply change the `color-scheme` property in `src/styles.scss`:

```scss
body {
  color-scheme: light; // For light theme
  // or
  color-scheme: dark; // For dark theme
}
```

## What Changes

When you switch the color scheme, the following will automatically adapt:

### Authentication Pages (`/auth/login`, `/auth/register`, `/auth/forgot-password`)

- Background color (light gray → dark gray)
- Card backgrounds (white → dark gray)
- Text colors (dark → light)
- Box shadows (light → darker for better contrast)

### Dashboard Page (`/dashboard`)

- Background color
- Card backgrounds and shadows
- Text colors for headings and body text
- Menu item colors

### Material Design Components

- Form fields, buttons, and other Material components automatically respond to `color-scheme`
- Icons and form controls adapt their appearance

## Implementation Details

The implementation uses CSS `light-dark()` function to define colors that automatically switch based on the `color-scheme`:

```scss
.auth-background {
  background-color: light-dark(#f9fafb, #111827);
}

.auth-heading {
  color: light-dark(#111827, #f9fafb);
}
```

## CSS Classes Available

- `.auth-background` - Page background for auth pages
- `.auth-card` - Card styling for auth forms
- `.auth-heading` - Heading text color
- `.auth-text` - Body text color
- `.dashboard-background` - Page background for dashboard
- `.dashboard-card` - Card styling for dashboard
- `.dashboard-heading` - Dashboard heading text color
- `.dashboard-text` - Dashboard body text color

## Browser Support

The `light-dark()` CSS function is supported in modern browsers. For older browsers, the styles will fall back to the first color value (light theme).
