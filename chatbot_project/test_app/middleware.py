from django.utils.deprecation import MiddlewareMixin

class CustomCookieMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        # Modify the session cookie
        if 'sessionid' in request.COOKIES:
            response.set_cookie(
                'sessionid',
                request.COOKIES['sessionid'],
                samesite='None',
                secure=True,
            )
        # Modify the CSRF cookie
        if 'csrftoken' in request.COOKIES:
            response.set_cookie(
                'csrftoken',
                request.COOKIES['csrftoken'],
                samesite='None',
                secure=True,
            )
        return response
