export enum Path {
  // General containers
  Home = '',
  NotFound = '404',
  Landing = 'landing',

  // Auth
  SignIn = 'sign-in',
  SignUp = 'sign-up',
  ForgotPassword = 'forgot-password',
  ForgotPasswordEmailSent = 'forgot-password-email-sent',
  PasswordReset = 'password-reset',
  PasswordResetFailed = 'password-reset-failed',
  PasswordResetSucceeded = 'password-reset-succeeded',

  // App base url
  Dashboard = 'dashboard',
  Token = 'triglavski-narodni-park',
  Hexagons = 'home',
  MyCollection = 'my-collection',
  ŠkocjanskeJame="skocjanske-jame",

  // Settings
  Settings = 'settings',
  SettingsAccount = 'account',
  SettingsAppearance = 'appearance',
  SettingsBilling = 'billing',
  SettingsBlockedUsers = 'blocked-users',
  SettingsNotifications = 'notifications',
  SettingsSecurity = 'security',
  SettingsSecurityLog = 'security-log',

  // User
  Users = 'users',
  UsersOverview = 'overview',
  UsersProfile = ':username',
}
