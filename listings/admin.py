from django.contrib import admin
from .models import Listing, Category, City, Country


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'title')


class ListingAdmin(admin.ModelAdmin):
    list_display = ('id', 'title')


admin.site.register(City)
admin.site.register(Country)
admin.site.register(Listing, ListingAdmin)
admin.site.register(Category, CategoryAdmin)
