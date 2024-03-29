from rest_framework import serializers
from .models import Category, FavoriteListing, Inquiry, Listing, Country, City, ListingComment


# Category Serializer
class CategorySerializer(serializers.ModelSerializer):
    quantity = serializers.SerializerMethodField()

    def get_quantity(self, category):
        return Listing.objects.filter(category=category).count()

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


class ListingAddSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'


class ListingSerializer(serializers.ModelSerializer):
    city_title = serializers.SerializerMethodField()
    category_title = serializers.SerializerMethodField()
    country_title = serializers.SerializerMethodField()
    owner_name = serializers.SerializerMethodField()
    owner_avatar = serializers.SerializerMethodField()
    is_favorite = serializers.SerializerMethodField()

    def get_is_favorite(self, listing):
        print(self.context['request'].user)
        # favorite_listings = FavoriteListing.objects.filter(
        #     owner=user_id).count()
        # if favorite_listings:
        #     return True
        # return False
        return False

    def get_category_title(self, listing):
        if listing.category:
            return listing.category.title
        return 'Белгисиз'

    def get_country_title(self, listing):
        if listing.city:
            return listing.city.country.title
        return 'Белгисиз'

    def get_city_title(self, listing):
        if listing.city:
            return listing.city.title
        return 'Кыргызстан'

    def get_owner_name(self, listing):
        if listing.owner:
            return listing.owner.username
        return ''

    def get_owner_avatar(self, listing):
        if listing.owner.avatar:
            return listing.owner.avatar.url
        return ''

    class Meta:
        model = Listing
        fields = ('id', 'category_title', 'country_title', 'city_title', 'owner_avatar',
                  'owner_name', 'photo_main', 'title', 'price', 'address', 'description', 'list_date', 'phone_number', 'is_favorite')


# Listing Serializer
class ListingDetailSerializer(serializers.ModelSerializer):
    city_title = serializers.SerializerMethodField()
    category_title = serializers.SerializerMethodField()
    country_title = serializers.SerializerMethodField()
    owner_name = serializers.SerializerMethodField()

    def get_category_title(self, listing):
        return listing.category.title

    def get_country_title(self, listing):
        return listing.city.country.title

    def get_city_title(self, listing):
        return listing.city.title

    def get_owner_name(self, listing):
        return listing.owner.first_name

    class Meta:
        model = Listing
        fields = '__all__'


# ListingCommentSerializer
class ListingCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListingComment
        fields = '__all__'


# FavoriteListingSerializer
class FavoriteListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteListing
        fields = '__all__'


# InquirySerializer
class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = '__all__'
