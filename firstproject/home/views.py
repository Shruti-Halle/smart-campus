from django.shortcuts import render,HttpResponse
from home.models import Contact

# Create your views here.
def contact(request):
    
    return render(request,'Contact.html')
    # return HttpResponse("this is contact page")

def homepage(request):
    if request.method == "POST":
        name=request.POST.get('name')
        contactNumber=request.POST.get('contactNumber')
        emailId=request.POST.get('emailId')
        address=request.POST.get('address')
        
        homepage=Contact(name=name,contactNumber=contactNumber,emailId=emailId,address=address)
        homepage.save()
    return render(request,'homepage.html')

    # return HttpResponse("this is home page")

