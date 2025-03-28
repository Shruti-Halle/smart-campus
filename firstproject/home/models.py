from django.db import models

# Create your models here.
class Contact(models.Model):
    name=models.CharField(max_length=122)
    contactNumber=models.CharField(max_length=20)
    emailId=models.EmailField(max_length=100)
    address=models.TextField()

    def __str__(self):
        return self.name
    