from rest_framework.generics import ListCreateAPIView, CreateAPIView
from eggs.models import UserInformation
from eggs.serializers import UserInformationSerializer, UserSerializer
from django.shortcuts import redirect
from rest_framework.generics import CreateAPIView
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

class CustomLoginView(APIView):
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})

class UserInformationListCreateView(ListCreateAPIView):
    queryset = UserInformation.objects.all()
    serializer_class = UserInformationSerializer

class LoginAPIView(CreateAPIView):
    model = UserInformation
    fields = ['username', 'password', 'category']

    def create(self, request, *args, **kwargs):
        username = request.data['username']
        password = request.data['password']
        category = request.data['category']

        try:
            user = UserInformation.objects.get(username=username, category=category)
            if user.check_password(password):
                login(request, user)
                user.update_last_login()
                return JsonResponse({'message': 'Login successful'})
            else:
                return JsonResponse({'message': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        except UserInformation.DoesNotExist:
            return JsonResponse({'message': 'User does not exist'}, status=status.HTTP_400_BAD_REQUEST)