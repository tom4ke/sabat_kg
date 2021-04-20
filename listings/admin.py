from django.contrib import admin
from .models import Listing, Category, City, Country


admin.site.register(City)
admin.site.register(Country)
admin.site.register(Listing)
admin.site.register(Category)
