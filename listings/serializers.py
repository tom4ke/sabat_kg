from rest_framework import serializers
from .models import Category, Listing, Country, City


# Category Serializer
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


# Country Serializer
class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'


# City Serializer
class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'


# Listing Serializer
class ListingSerializer(serializers.ModelSerializer):
    city_title = serializers.SerializerMethodField()
    category_title = serializers.SerializerMethodField()
    country_title = serializers.SerializerMethodField()

    def get_category_title(self, listing):
        return listing.category.title

    def get_country_title(self, listing):
        return listing.city.country.title

    def get_city_title(self, listing):
        return listing.city.title

    class Meta:
        model = Listing
        fields = '__all__'
