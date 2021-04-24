from django.db import models
from django.utils.translation import ugettext_lazy as _
from datetime import datetime

from users.models import User


class EventCategory(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Иш-чара категориясы')
        verbose_name_plural = _('Иш-чара категориялары')


class Event(models.Model):
    title = models.CharField(max_length=50)
    category = models.ForeignKey(
        EventCategory, on_delete=models.CASCADE, verbose_name="Категория")
    time_date = models.DateField()
    price = models.IntegerField()
    is_free = models.BooleanField(default=False)
    is_popular = models.BooleanField(default=False)
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, verbose_name="Жарыялаган")

    class Meta:
        verbose_name = _('Иш-чара')
        verbose_name_plural = _('Иш-чара')
