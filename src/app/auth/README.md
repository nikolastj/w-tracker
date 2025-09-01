# Authentication Module

This module provides a complete authentication system for the W-Tracker application using Angular Material components.

## Features

### 🔐 Authentication Service (`AuthService`)

- Login with username/password
- User registration
- Password reset functionality
- Persistent authentication state with localStorage
- Reactive authentication state management with RxJS

### 📱 Components

#### Login Component (`/auth/login`)

- Material Design login form
- Form validation
- Password visibility toggle
- Loading states
- Error handling with snackbar notifications

#### Register Component (`/auth/register`)

- Complete user registration form
- Password confirmation validation
- Form validation with error messages
- Bio field for user description

#### Forgot Password Component (`/auth/forgot-password`)

- Email-based password reset
- Success confirmation screen
- Resend functionality

### 🛡️ Auth Guard

- Protects routes that require authentication
- Automatically redirects to login when not authenticated
- Uses reactive authentication state

## API Integration

The authentication system integrates with the backend APIs:

### Login Endpoint

```
POST /login
Body: { "username": "adminAdmin", "password": "xxxxx" }
Response: { "id": 3, "username": "adminAdmin", "email": "admin@admin.com", "token": "tokenValue" }
```

### Registration Endpoint

```
POST /users
Body: {
  "user": {
    "firstName": "Admin",
    "lastName": "Admin",
    "username": "adminAdmin",
    "bio": "Admin user",
    "password": "xxxxx",
    "email": "admin@admin.com"
  }
}
```

## Environment Configuration

API URL is configured in `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
};
```

## Usage

### Importing Auth Components

```typescript
import { AuthService, LoginComponent, RegisterComponent } from './auth';
```

### Using Auth Service

```typescript
constructor(private authService: AuthService) {}

// Login
this.authService.login({ username: 'user', password: 'pass' }).subscribe();

// Check authentication status
this.authService.isAuthenticated(); // boolean

// Get current user
this.authService.getCurrentUser(); // User | null

// Logout
this.authService.logout();
```

### Protecting Routes

```typescript
{
  path: 'protected',
  canActivate: [AuthGuard],
  component: ProtectedComponent
}
```

## Styling

- Uses Angular Material components
- Tailwind CSS for layout and spacing
- Custom snackbar styles for success/error messages
- Responsive design for mobile and desktop

## File Structure

```
src/app/auth/
├── components/
│   ├── login/
│   ├── register/
│   └── forgot-password/
├── guards/
│   └── auth.guard.ts
├── models/
│   └── auth.models.ts
├── services/
│   └── auth.service.ts
├── index.ts
└── README.md
```
