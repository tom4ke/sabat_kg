from django.db import models
from users.models import User
from django.utils.translation import ugettext_lazy as _
from datetime import datetime


class Category(models.Model):
    title = models.CharField(max_length=200)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Категория')
        verbose_name_plural = _('Категориялар')


class Listing(models.Model):
    owner = models.ForeignKey(
        User, related_name="listings", on_delete=models.CASCADE, null=True, verbose_name='Колдонуучу')
    category = models.ForeignKey(
        Category, related_name="clistings", on_delete=models.CASCADE, null=True, verbose_name='Категория')
    title = models.CharField(max_length=200)

    address = models.CharField(max_length=200, blank=True)
    city = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)
    price = models.IntegerField()
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_1 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_2 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_3 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_4 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_5 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_6 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)

    is_published = models.BooleanField(default=False)
    list_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Жарыя')
        verbose_name_plural = _('Жарыялар')
