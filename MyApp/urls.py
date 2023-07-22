from django.contrib import admin
from django.urls import path, include
from MyApp import views

urlpatterns = [
    path("", views.index, name='home'),
    path("home", views.index, name='home'),
    path("about", views.about, name='about'),
    path("menu", views.category, name='menu'),
    path("contact", views.contact, name='contact'),
    path('menu/cakes', views.cakes_menu, name='cakes_menu'),
    path('menu/savory-delights', views.food_menu, name='food_menu'),
    path('menu/beverages', views.beverages_menu, name='beverages_menu')
]
