const { auth, requiresAuth } = require('express-openid-connect');

const oidcConfig = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.BACKEND_URL,
  clientID: process.env.OIDC_CLIENT_ID,
  issuerBaseURL: process.env.OIDC_ISSUER_URL,
  secret: process.env.SESSION_SECRET,
  routes: {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    callback: '/api/auth/callback'
  },
  session: {
    rollingDuration: 24 * 60 * 60,
    absoluteDuration: 7 * 24 * 60 * 60
  }
};

module.exports = { auth, requiresAuth, oidcConfig };