# from django.contrib import admin
# from home.models import Contact
# # Register your models here.
# admin.site.register(Contact)
from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    # Specify the fields to display in the admin table view
    list_display = ('name', 'contactNumber', 'emailId', 'address')

