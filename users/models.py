from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    avatar = models.ImageField(
        upload_to='avatars/%Y/%m/%d/', null=True, blank=True)

    class Meta:
        verbose_name = "Колдонуучу"
        verbose_name_plural = "Колдонуучулар"
