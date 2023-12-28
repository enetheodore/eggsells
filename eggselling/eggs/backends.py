from django.contrib.auth.backends import BaseBackend
from .models import UserInformation
from django.contrib.auth.signals import user_logged_in



class UserInformationBackend(BaseBackend):
  def authenticate(self, request, username=None, password=None):
    try:
      user = UserInformation.objects.get(username=username)
      if user.check_password(password):
        return user
    except UserInformation.DoesNotExist:
      return None

  def login(self, request, user):
    """Log in a user without updating their last_login field."""

    # Set the session variables.
    request.session['_auth_user_id'] = user.pk
    request.session['_auth_user_backend'] = self

    # Send the user_logged_in signal.
    user_logged_in.send(sender=user.__class__, request=request, user=user)
