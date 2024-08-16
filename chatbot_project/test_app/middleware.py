from django.utils.deprecation import MiddlewareMixin

class ContentSecurityPolicyMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        response['Content-Security-Policy'] = "frame-ancestors https://chatbotnewv3-production.up.railway.app"
        return response