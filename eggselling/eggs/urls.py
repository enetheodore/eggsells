from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import LoginAPIView
from .views import UserInformationListCreateView
from .views import CustomLoginView

urlpatterns = [
    # Other URL patterns
    path('auth/login/', CustomLoginView.as_view(), name='login'),
    # Other URL patterns
]