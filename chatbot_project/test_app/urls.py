from django.urls import path
from . import views
from django.urls import re_path

urlpatterns = [
    path('', views.chatbot, name='chatbot'),
    path('widget/', views.widget_view, name='widget-view'),
    path('get_markers_data/', views.get_markers_data, name='get_markers_data'),
]