from eggs.models import UserInformation
from rest_framework import serializers
from django.contrib.auth.models import User

from eggselling.eggs.models import UserInformation

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
class UserInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInformation
        fields = '__all__'
