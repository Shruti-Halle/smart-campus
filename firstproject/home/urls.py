
from django.contrib import admin
from django.urls import path
from home import views



urlpatterns = [
     path("",views.contact,name='contact'),
     path("homepage",views.homepage,name='homepage'),
     
     
]
