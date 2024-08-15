from django import template
from django.templatetags.static import static
from django.utils.html import escape

register = template.Library()

@register.filter(name='static_url')
def static_url(request, path):
    return request.build_absolute_uri(static(path))
