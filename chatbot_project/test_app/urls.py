from django.urls import path
from . import views
from django.urls import re_path

urlpatterns = [
    path('', views.chatbot, name='chatbot'),
    path('widget/', views.widget_view, name='widget-view'),
]