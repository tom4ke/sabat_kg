from django.contrib import admin
from .models import Listing, Category, City, Country, ListingComment, FavoriteListing, Inquiry


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'title')


class ListingAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'category')


class ListingCommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'owner', 'comment')


admin.site.register(City)
admin.site.register(Country)
admin.site.register(ListingComment, ListingCommentAdmin)
admin.site.register(FavoriteListing)
admin.site.register(Inquiry)
admin.site.register(Listing, ListingAdmin)
admin.site.register(Category, CategoryAdmin)
