const STABLE = new Set([
  'claimsParameter',
  'clientCredentials',
  'deviceFlow',
  'devInteractions',
  'encryption',
  'introspection',
  'jwtUserinfo',
  'mTLS',
  'registration',
  'registrationManagement',
  'requestObjects',
  'resourceIndicators',
  'revocation',
  'rpInitiatedLogout',
  'userinfo',
]);

const DRAFTS = new Map(Object.entries({
  backchannelLogout: {
    name: 'OpenID Connect Back-Channel Logout 1.0 - draft 06',
    type: 'OIDF AB/Connect Working Group draft',
    url: 'https://openid.net/specs/openid-connect-backchannel-1_0-06.html',
    version: [4, 'draft-04', 'draft-05', 'draft-06'],
  },
  fapiRW: {
    name: 'Financial-grade API - Part 2: Read and Write API Security Profile - Implementer\'s Draft 02',
    type: 'OIDF FAPI Working Group Implementer\'s Draft',
    url: 'https://openid.net/specs/openid-financial-api-part-2-ID2.html',
    version: ['id02-rev.3', 'implementers-draft-02'],
  },
  dPoP: {
    name: 'OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer - draft 03',
    type: 'IETF OAuth Working Group draft',
    url: 'https://tools.ietf.org/html/draft-ietf-oauth-dpop-03',
    version: ['draft-03'],
  },
  jwtIntrospection: {
    name: 'JWT Response for OAuth Token Introspection - draft 10',
    type: 'IETF OAuth Working Group draft',
    url: 'https://tools.ietf.org/html/draft-ietf-oauth-jwt-introspection-response-10',
    version: ['draft-09', 'draft-10'],
  },
  jwtResponseModes: {
    name: 'JWT Secured Authorization Response Mode for OAuth 2.0 - Implementer\'s Draft 01',
    type: 'OIDF FAPI WG Implementer\'s Draft',
    url: 'https://openid.net/specs/openid-financial-api-jarm-ID1.html',
    version: [1, 2, 'draft-02', 'implementers-draft-01'],
  },
  pushedAuthorizationRequests: {
    name: 'OAuth 2.0 Pushed Authorization Requests - draft 06',
    type: 'IETF OAuth Working Group draft',
    url: 'https://tools.ietf.org/html/draft-ietf-oauth-par-06',
    version: [0, 'individual-draft-01', 'draft-00', 'draft-01', 'draft-02', 'draft-03', 'draft-04', 'draft-05', 'draft-06'],
  },
  webMessageResponseMode: {
    name: 'OAuth 2.0 Web Message Response Mode - draft 00',
    type: 'Individual draft',
    url: 'https://tools.ietf.org/html/draft-sakimura-oauth-wmrm-00',
    version: [0, 'id-00', 'individual-draft-00'],
  },
  issAuthResp: {
    name: 'OAuth 2.0 Authorization Server Issuer Identifier in Authorization Response - draft 00',
    type: 'IETF OAuth Working Group draft',
    url: 'https://tools.ietf.org/html/draft-ietf-oauth-iss-auth-resp-00',
    version: ['draft-00'],
  },
}));

module.exports = {
  DRAFTS,
  STABLE,
};
