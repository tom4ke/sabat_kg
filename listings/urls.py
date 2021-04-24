from rest_framework import routers
from .api import CategoryViewSet, ListingViewSet, CityViewSet, CountryViewSet

router = routers.DefaultRouter()
router.register('api/categories', CategoryViewSet, 'categories')
router.register('api/listings', ListingViewSet, 'listings')
router.register('api/cities', CityViewSet, 'cities')
router.register('api/countries', CountryViewSet, 'countries')

urlpatterns = router.urls
