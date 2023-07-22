from django.shortcuts import render, HttpResponse
from datetime import datetime
from MyApp.models import Contact
from django.contrib import messages
# Create your views here.

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def category(request):
    return render(request, 'menu.html')

def cakes_menu(request):
    return render(request, 'cakes_menu.html')

def food_menu(request):
    return render(request, 'food_menu.html')

def beverages_menu(request):
    return render(request, 'beverages_menu.html')


def contact(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        date = datetime.today()
        contact = Contact(name=name, email=email, message=message, date=date)
        contact.save()
        messages.success(request, "We have recieved your feedback !")
    return render(request, 'contact.html')