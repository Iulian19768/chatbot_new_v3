from django.utils.deprecation import MiddlewareMixin

class ContentSecurityPolicyMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        # Update the CSP header to allow framing from specific domains
        response['Content-Security-Policy'] = "frame-ancestors https://chatbotnewv3-production.up.railway.app/widget"
        return response