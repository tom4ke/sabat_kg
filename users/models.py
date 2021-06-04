from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    avatar = models.ImageField(
        upload_to='avatars/%Y/%m/%d/', null=True, blank=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(unique=True, blank=True, null=True)

    class Meta:
        verbose_name = "Колдонуучу"
        verbose_name_plural = "Колдонуучулар"
