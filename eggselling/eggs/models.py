from datetime import timezone
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models


class UserInformation(AbstractUser):
    username = models.CharField(max_length=128, null=False, default='username')
    password = models.CharField(max_length=128, null=False)
    category = models.CharField(max_length=128, null=False, default="management")

    groups = models.ManyToManyField(Group, related_name='userinformation_set')
    user_permissions = models.ManyToManyField(Permission, related_name='userinformation_set')

    ROLE_CHOICES = (
        ('management', 'management'),
        ('purchaser', 'purchaser'),
        ('farm', 'farm'),
    )


class Management(models.Model):
    user = models.OneToOneField(UserInformation, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return self.user.username

    def create_marketing_history(self):
        purchase_time = self.purchase_time.replace(second=0, microsecond=0)
        start_time = purchase_time
        end_time = purchase_time + timezone.timedelta(minutes=1)


class Purchaser(models.Model):
    user = models.OneToOneField(UserInformation, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return self.user.username

    def perform_purchase(self):
        # Add purchase logic here
        pass


class Farm(models.Model):
    user = models.OneToOneField(UserInformation, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return self.user.username

    def perform_farming(self):
        # Add farming logic here
        pass